import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Patch,
	Post,
	Query,
	Res,
	UploadedFile,
	UseInterceptors
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
import { UpdateBookDto } from './dto/update-book.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import * as path from 'path'

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

			return res.json(newBook)
		} catch (error) {
			console.error(error)
			if (error.code === 11000) {
				throw new HttpException('Book already exists', HttpStatus.CONFLICT)
			} else {
				throw new HttpException(
					'Failed to create book',
					HttpStatus.INTERNAL_SERVER_ERROR
				)
			}
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
	@ApiOperation({ summary: 'Get Book by id' })
	@ApiNotFoundResponse({ description: 'Book not found' })
	@ApiParam({ name: 'id', description: 'Book ID', required: true })
	@Get(':id')
	async getBook(@Param('id') id: string) {
		const book = await this.booksService.getBook(id)
		return book
	}

	@ApiOkResponse({
		description: 'Book deleted successfully'
	})
	@ApiNotFoundResponse({ description: 'Book not found' })
	@ApiBadRequestResponse({ description: 'Bad Request' })
	@ApiOperation({ summary: 'Delete Book by id' })
	@ApiParam({ name: 'id', description: 'Book ID', required: true })
	@Delete(':id')
	async deleteBook(@Param('id') id: string) {
		const book = await this.booksService.deleteBook(id)

		if (!book) throw new HttpException('Book not found', HttpStatus.NOT_FOUND)

		return book
	}

	@ApiOkResponse({
		description: 'Book updated successfully'
	})
	@ApiNotFoundResponse({ description: 'Book not found' })
	@ApiBadRequestResponse({ description: 'Bad Request' })
	@ApiOperation({ summary: 'Update Book by id' })
	@ApiParam({ name: 'id', description: 'Book ID', required: true })
	@FormDataRequest({ storage: MemoryStoredFile })
	@Patch(':id')
	async updateBook(
		@Param('id') id: string,
		@Body() updateBookDto: UpdateBookDto
	) {
		const book = await this.booksService.updateBook(id, updateBookDto)
		return book
	}

	@Post('/like/:id')
	async giveLike(@Param('id') id: string) {
		return await this.booksService.giveLike(id)
	}

	@Post('/dislike/:id')
	async giveDislike(@Param('id') id: string) {
		return await this.booksService.giveDislike(id)
	}

	@Post('/remove-like/:id')
	async removeLike(@Param('id') id: string) {
		return await this.booksService.removeLike(id)
	}

	@Post('/remove-dislike/:id')
	async removeDislike(@Param('id') id: string) {
		return await this.booksService.removeDislike(id)
	}

	@Get('/author/getbooks')
	async getBooksByAuthor(@Query('name') name: string) {
		return await this.booksService.getBooksByAuthor(name)
	}
}
