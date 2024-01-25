import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { CreateBookDto } from './dto/create-book.dto'
import { BookDocument } from 'src/schemas/book.schema'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'
import { ImageService } from 'src/utils/imageService.service'
import { UpdateBookDto } from './dto/update-book.dto'

@Injectable()
export class BooksService {
	constructor(
		@InjectModel('Books') private bookModel: Model<BookDocument>,
		private imageService: ImageService
	) {}

	async createBook(CreateBookDto: CreateBookDto): Promise<BookDocument> {
		const book = new this.bookModel(CreateBookDto)

		// Upload image
		const imageUrl = await this.imageService.uploadImage(CreateBookDto.image)

		book.image = imageUrl

		return await book.save()
	}

	async getBooks(): Promise<BookDocument[]> {
		return await this.bookModel.find()
	}

	async updateBook(
		id: string,
		updateBookDto: UpdateBookDto
	): Promise<BookDocument> {
		try {
			const book = await this.bookModel.findById(id)
			if (!book) {
				throw new NotFoundException('User not found')
			}

			let image: string
			if (updateBookDto.image) {
				image = await this.imageService.uploadImage(updateBookDto.image)
			}

			const updatedBook = await this.bookModel.findByIdAndUpdate(
				id,
				{ ...updateBookDto, image: image },
				{ new: true }
			)

			if (!updatedBook) {
				throw new BadRequestException('Update operation not acknowledged')
			}

			return updatedBook
		} catch (error) {
			console.error(error)
			throw error
		}
	}

	async deleteBook(id: string): Promise<BookDocument> {
		return await this.bookModel.findByIdAndDelete(id)
	}
	async giveLike(id: string) {
		const book = await this.updateGrade(id, 'likes', 1)
		return book
	}

	async giveDislike(id: string) {
		const book = await this.updateGrade(id, 'dislikes', 1)
		return book
	}

	async getBook(id: string): Promise<BookDocument> {
		const book = await this.updateGrade(id, 'views', 1)

		if (!book) throw new NotFoundException('Book not found')

		return book
	}

	async removeLike(id: string) {
		const book = await this.updateGrade(id, 'likes', -1)
		return book
	}

	async removeDislike(id: string) {
		const book = await this.updateGrade(id, 'dislikes', -1)
		return book
	}

	async getBooksByAuthor(authorName: string): Promise<BookDocument[]> {
		const book = await this.bookModel.find({ authors: authorName })

		if (!book || book.length === 0)
			throw new NotFoundException('Books not found')

		return book
	}

	private async updateGrade(
		id: string,
		field: 'likes' | 'dislikes' | 'views',
		value: number
	): Promise<BookDocument> {
		const query = { _id: id }
		const options = { new: true }

		let book = await this.bookModel.findById(id)

		if (!book) {
			throw new NotFoundException('Book not found')
		}

		const rating = await this.calculateRating(
			book.grade.views + (field === 'views' ? value : 0),
			book.grade.likes + (field === 'likes' ? value : 0),
			book.grade.dislikes + (field === 'dislikes' ? value : 0)
		)

		const incUpdate = { $inc: { [`grade.${field}`]: value } }
		book = await this.bookModel.findOneAndUpdate(query, incUpdate, options)

		const ratingUpdate = { 'grade.rating': rating }
		book = await this.bookModel.findByIdAndUpdate(id, ratingUpdate, options)

		return book
	}

	async calculateRating(
		views: number,
		likes: number,
		dislikes: number
	): Promise<number> {
		const weightViews = 0.5
		const weightLikes = 0.4
		const weightDislikes = 0.1

		const normalizedLikes = Math.min(likes, 100)
		const normalizedDislikes = Math.min(dislikes, 100)

		const totalWeight = weightViews + weightLikes + weightDislikes

		const normalizedViews = views / 1000
		const normalizedLikesScore = (normalizedLikes / 100) * weightLikes
		const normalizedDislikesScore = (normalizedDislikes / 100) * weightDislikes

		const weightedSum =
			normalizedViews * weightViews +
			normalizedLikesScore +
			normalizedDislikesScore

		const normalizedRating = ((weightedSum / totalWeight) * 10).toFixed(1)

		return Math.min(Math.max(Number(normalizedRating), 0), 10)
	}
}
