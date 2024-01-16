import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UserDocument } from '../schemas/user.schema'
import { updateUserDto } from './dto/update-user.dto'
import { JwtService } from '@nestjs/jwt'
import { ImageService } from 'src/utils/imageService.service'

@Injectable()
export class UsersService {
	constructor(
		@InjectModel('Users') private userModel: Model<UserDocument>,
		private jwtService: JwtService,
		private imageService: ImageService
	) {}

	async findByUsername(username: string): Promise<UserDocument> {
		const user = await this.userModel.findOne({ username })

		if (!user) throw new NotFoundException('User not found')
		return user
	}

	async findByEmail(email: string): Promise<UserDocument> {
		const user = await this.userModel.findOne({ email })

		if (!user) throw new NotFoundException('User not found')
		return user
	}

	async update(id: string, updateUserDto: updateUserDto): Promise<any> {
		try {
			const user = await this.userModel.findById(id)
			if (!user) {
				throw new NotFoundException('User not found')
			}

			const image = await this.imageService.uploadImage(updateUserDto.avatar)
			const updatedUser = await this.userModel.findByIdAndUpdate(
				id,
				{ ...updateUserDto, avatar: image },
				{ new: true }
			)

			if (!updatedUser) {
				throw new BadRequestException('Update operation not acknowledged')
			}

			return updatedUser
		} catch (error) {
			console.error(error)
			throw error
		}
	}

	async remove(id: string): Promise<UserDocument> {
		const user = await this.userModel.findByIdAndDelete(id).exec()

		if (!user) throw new NotFoundException('User not found')
		return user
	}

	async profile(id: string): Promise<UserDocument> {
		const user = await this.userModel.findById(id)
		if (!user) throw new NotFoundException('User not found')
		return user
	}

	async validateToken(token: string) {
		return this.jwtService.verify(token, {
			secret: process.env.SECRET_KEY
		})
	}
}
