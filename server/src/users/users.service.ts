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
import * as bcrypt from 'bcrypt'
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

	async update(
		id: string,
		updateUserDto: updateUserDto
	): Promise<UserDocument> {
		try {
			const user = await this.userModel.findById(id)

			if (!user) {
				throw new NotFoundException('User not found')
			}

			this.updateUserFields(user, updateUserDto)

			await user.save()

			return user
		} catch (error) {
			console.error(error)
			throw new BadRequestException('Something went wrong')
		}
	}

	async remove(id: string): Promise<UserDocument> {
		const user = await this.userModel.findByIdAndDelete(id).exec()

		if (!user) throw new NotFoundException('User not found')
		return user
	}

	async validateToken(token: string) {
		return this.jwtService.verify(token, {
			secret: process.env.SECRET_KEY
		})
	}

	private async updateUserFields(user: UserDocument, dto: updateUserDto) {
		if (dto.username) user.username = dto.username
		if (dto.email) user.email = dto.email
		if (dto.password) user.password = await this.hashPassword(dto.password)
		if (dto.avatar)
			user.avatar = await this.imageService.uploadImage(dto.avatar)
	}

	private async hashPassword(password: string): Promise<string> {
		const salt = await bcrypt.genSalt(10)
		return bcrypt.hash(password, salt)
	}
}
