import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { AuthorDocument } from 'src/schemas/author.schema'
import { CreateAuthorDto } from './create-author.dto'
import { ImageService } from 'src/utils/imageService.service'

@Injectable()
export class AuthorsService {
	constructor(
		@InjectModel('Auhtors') private authorModel: Model<AuthorDocument>,
		private imageService: ImageService
	) {}

	async createAuthor(
		createAuthorDto: CreateAuthorDto
	): Promise<AuthorDocument> {
		const author = new this.authorModel(createAuthorDto)
		const image = await this.imageService.uploadImage(createAuthorDto.image)
		author.image = image

		return await author.save()
	}

	async getAuthors(): Promise<AuthorDocument[]> {
		return await this.authorModel.find()
	}

	async getAuthor(id: string): Promise<AuthorDocument> {
		return await this.authorModel.findById(id)
	}

	async deleteAuthor(id: string): Promise<AuthorDocument> {
		return await this.authorModel.findByIdAndDelete(id, { new: true })
	}
}
