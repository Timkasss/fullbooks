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
import {
	ApiTags,
	ApiCreatedResponse,
	ApiOkResponse,
	ApiBadRequestResponse,
	ApiNotFoundResponse,
	ApiParam,
	ApiOperation
} from '@nestjs/swagger'
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
	@ApiOperation({ summary: 'Create Book' })
	@ApiCreatedResponse({
		description: 'Book created successfully'
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
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

	@ApiOkResponse({
		description: 'List of books retrieved successfully'
	})
	@ApiOperation({ summary: 'Get all Books' })
	@Get()
	async getBooks() {
		return await this.booksService.getBooks()
	}

	@ApiOkResponse({
		description: 'Book retrieved successfully'
	})
	@ApiNotFoundResponse({ description: 'Book not found' })
	@ApiOperation({ summary: 'Get Book by id' })
	@ApiParam({ name: 'id', description: 'Book ID', required: true })
	@Get(':id')
	async getBook(@Res() res: Response, @Param('id') id: string) {
		const book = await this.booksService.getBook(id)
		return res.status(HttpStatus.OK).json(book)
	}

	@ApiOkResponse({
		description: 'Book deleted successfully'
	})
	@ApiNotFoundResponse({ description: 'Book not found' })
	@ApiBadRequestResponse({ description: 'Bad Request' })
	@ApiOperation({ summary: 'Delete Book by id' })
	@ApiParam({ name: 'id', description: 'Book ID', required: true })
	@Delete(':id')
	async deleteBook(@Res() res: Response, @Param('id') id: string) {
		const book = await this.booksService.deleteBook(id)
		return res.status(HttpStatus.OK).json(book)
	}
}
