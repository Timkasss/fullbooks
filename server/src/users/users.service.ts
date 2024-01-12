import {
	BadRequestException,
	HttpException,
	HttpStatus,
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
			const image = await this.imageService.uploadImage(updateUserDto.avatar)
			const user = await this.userModel.findByIdAndUpdate(
				id,
				{ ...updateUserDto, avatar: image },
				{
					new: true
				}
			)
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

	private async updateUserFields(user: UserDocument, dto: updateUserDto) {}

	private async hashPassword(password: string): Promise<string> {
		const salt = await bcrypt.genSalt(10)
		return bcrypt.hash(password, salt)
	}
}
