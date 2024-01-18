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

	async getBook(id: string): Promise<BookDocument> {
		const book = await this.bookModel.findById(id)

		if (!book) throw new NotFoundException('Book not found')

		return book
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
}
