import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	HttpException,
	HttpStatus,
	UseGuards
} from '@nestjs/common'
import {
	ApiTags,
	ApiCreatedResponse,
	ApiOkResponse,
	ApiNotFoundResponse,
	ApiParam,
	ApiBadRequestResponse,
	ApiOperation,
	ApiConflictResponse
} from '@nestjs/swagger'
import { CreateAuthorDto } from './create-author.dto'
import { AuthorsService } from './authors.service'
import { FormDataRequest, MemoryStoredFile } from 'nestjs-form-data'
import { RoleGuard } from 'src/guards/role.guard'
import { AuthGuard } from 'src/guards/auth.guard'
import { Role } from 'src/enums/role.enum'
import { Roles } from 'src/decorators/roles.decorator'

@ApiTags('authors')
@Roles(Role.USER)
@UseGuards(AuthGuard, RoleGuard)
@Controller('authors')
export class AuthorsController {
	constructor(private authorsService: AuthorsService) {}

	@FormDataRequest({ storage: MemoryStoredFile })
	@ApiCreatedResponse({
		description: 'Author created successfully'
	})
	@ApiConflictResponse({ description: 'Author already exists' })
	@ApiOperation({ summary: 'Create Author' })
	@ApiBadRequestResponse({ description: 'Bad Request' })
	@Post()
	async createAuthor(@Body() createAuthorDto: CreateAuthorDto) {
		try {
			const author = await this.authorsService.createAuthor(createAuthorDto)
			return author
		} catch (error) {
			console.log(error)
			if (error.code === 11000) {
				throw new HttpException('Author already exists', HttpStatus.CONFLICT)
			} else {
				throw new HttpException(
					'Failed to create author',
					HttpStatus.INTERNAL_SERVER_ERROR
				)
			}
		}
	}
	@ApiOperation({ summary: 'Get all Authors' })
	@ApiOkResponse({
		description: 'List of authors retrieved successfully'
	})
	@Get()
	getAuthors() {
		return this.authorsService.getAuthors()
	}

	@ApiOperation({ summary: 'Get Author by ID' })
	@ApiOkResponse({
		description: 'Author retrieved successfully'
	})
	@ApiNotFoundResponse({ description: 'Author not found' })
	@ApiParam({ name: 'id', description: 'Author ID', required: true })
	@Get(':id')
	getAuthor(@Param('id') id: string) {
		const author = this.authorsService.getAuthor(id)

		return author
	}

	@ApiOperation({ summary: 'Delete Author by ID' })
	@ApiOkResponse({
		description: 'Author deleted successfully'
	})
	@ApiNotFoundResponse({ description: 'Author not found' })
	@ApiBadRequestResponse({ description: 'Bad Request' })
	@ApiParam({ name: 'id', description: 'Author ID', required: true })
	@Delete(':id')
	deleteAuthor(@Param('id') id: string) {
		return this.authorsService.deleteAuthor(id)
	}
}
