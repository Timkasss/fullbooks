import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { AuthorsAwardsDocument } from 'src/schemas/authors-awards.schema'
import { ImageService } from 'src/utils/imageService.service'
import { CreateAwardDto } from './authors-awards-create.dto'

@Injectable()
export class AuthorsAwardsService {
	constructor(
		@InjectModel('Awards')
		private authorsAwardsModel: Model<AuthorsAwardsDocument>,
		private imageService: ImageService
	) {}

	async createAward(
		createAwardDto: CreateAwardDto
	): Promise<AuthorsAwardsDocument> {
		const award = new this.authorsAwardsModel(createAwardDto)

		const image = await this.imageService.uploadImage(createAwardDto.image)
		award.image = image
		return await award.save()
	}

	async getAwards(): Promise<AuthorsAwardsDocument[]> {
		return await this.authorsAwardsModel.find()
	}

	async getAward(id: string): Promise<AuthorsAwardsDocument> {
		console.log(id)
		const award = await this.authorsAwardsModel.findById(id)
		if (!award) throw new HttpException('Award not found', HttpStatus.NOT_FOUND)
		return award
	}

	async deleteAward(id: string): Promise<AuthorsAwardsDocument> {
		const award = await this.authorsAwardsModel.findByIdAndDelete(id, {
			new: true
		})
		if (!award) throw new HttpException('Award not found', HttpStatus.NOT_FOUND)
		return award
	}

	async updateAward(
		id: string,
		createAwardDto: CreateAwardDto
	): Promise<AuthorsAwardsDocument> {
		const image = await this.imageService.uploadImage(createAwardDto.image)
		const award = await this.authorsAwardsModel.findByIdAndUpdate(
			id,
			{ image: image },
			{ new: true }
		)
		if (!award) throw new HttpException('Award not found', HttpStatus.NOT_FOUND)
		return award
	}
}
