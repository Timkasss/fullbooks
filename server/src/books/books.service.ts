import { Injectable } from '@nestjs/common'
import { CreateBookDto } from './dto/create-book.dto'
import { Book, BookDocument } from 'src/schemas/book.schema'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'
import { firstValueFrom } from 'rxjs'
import { HttpService } from '@nestjs/axios'

@Injectable()
export class BooksService {
	constructor(
		@InjectModel('Books') private bookModel: Model<BookDocument>,
		private httpService: HttpService
	) {}

	async createBook(CreateBookDto: CreateBookDto): Promise<BookDocument> {
		const book = new this.bookModel(CreateBookDto)

		const image = CreateBookDto.image
		const formData = new FormData()
		formData.append('image', image.buffer.toString('base64')) // put it into utils
		const uploadUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.IMG_API_KEY}`
		const { data: imageData } = await firstValueFrom(
			this.httpService.post(uploadUrl, formData)
		)
		book.image = imageData.data.url

		return await book.save()
	}

	async getBooks(): Promise<BookDocument[]> {
		return await this.bookModel.find()
	}

	async getBook(id: string): Promise<BookDocument> {
		return await this.bookModel.findById(id)
	}

	async deleteBook(id: string): Promise<BookDocument> {
		return await this.bookModel.findByIdAndDelete(id)
	}
}
