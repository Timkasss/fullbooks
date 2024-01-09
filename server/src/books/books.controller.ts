import {
	Body,
	Controller,
	Delete,
	Get,
	HttpStatus,
	Param,
	Post,
	Res
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateBookDto } from './dto/create-book.dto'
import { Response } from 'express'
import { BooksService } from './books.service'
import { FormDataRequest, MemoryStoredFile } from 'nestjs-form-data'

@ApiTags('books')
@Controller('books')
export class BooksController {
	constructor(private booksService: BooksService) {}

	@FormDataRequest({ storage: MemoryStoredFile })
	@Post()
	async createBook(@Body() createBookDto: CreateBookDto, @Res() res: Response) {
		try {
			const newBook = await this.booksService.createBook(createBookDto)

			return res.status(HttpStatus.CREATED).json(newBook)
		} catch (error) {
			console.error(error)
			return res.status(HttpStatus.BAD_REQUEST).json({
				statusCode: HttpStatus.BAD_REQUEST,
				message: 'Bad Request'
			})
		}
	}

	@Get()
	async getBooks() {
		return await this.booksService.getBooks()
	}

	@Get(':id')
	async getBook(@Res() res: Response, @Param('id') id: string) {
		const book = await this.booksService.getBook(id)
		return res.status(HttpStatus.OK).json(book)
	}

	@Delete(':id')
	async deleteBook(@Res() res: Response, @Param('id') id: string) {
		const book = await this.booksService.deleteBook(id)
		return res.status(HttpStatus.OK).json(book)
	}
}
