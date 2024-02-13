import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Patch,
	Post
} from '@nestjs/common'
import { AuthorsAwardsService } from './authors-awards.service'
import { CreateAwardDto } from './authors-awards-create.dto'
import { FormDataRequest, MemoryStoredFile } from 'nestjs-form-data'

@Controller('awards')
export class AuthorsAwardsController {
	constructor(private authorsAwardsService: AuthorsAwardsService) {}

	@FormDataRequest({ storage: MemoryStoredFile })
	@Post()
	async createAward(@Body() createAwardDto: CreateAwardDto) {
		try {
			const newAward =
				await this.authorsAwardsService.createAward(createAwardDto)
			return newAward
		} catch (error) {
			console.log(error)
			if (error.code === 11000) {
				throw new HttpException('Award already exists', HttpStatus.CONFLICT)
			} else {
				throw new HttpException('Image not provided', HttpStatus.BAD_REQUEST)
			}
		}
	}

	@Get('')
	async getAwards() {
		return await this.authorsAwardsService.getAwards()
	}

	@Get(':id')
	async getAward(@Param('id') id: string) {
		return await this.authorsAwardsService.getAward(id)
	}

	@Delete(':id')
	async deleteAward(@Param('id') id: string) {
		return await this.authorsAwardsService.deleteAward(id)
	}

	@FormDataRequest({ storage: MemoryStoredFile })
	@Patch(':id')
	async updateAward(
		@Body() createAwardDto: CreateAwardDto,
		@Param('id') id: string
	) {
		return await this.authorsAwardsService.updateAward(id, createAwardDto)
	}
}
