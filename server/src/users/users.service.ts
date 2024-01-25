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
import { Request } from 'express'
import * as bcrypt from 'bcrypt'

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
			if (!user) throw new NotFoundException('User not found')

			const image = await this.imageService.uploadImage(updateUserDto.avatar)

			const password = await bcrypt.hash(updateUserDto.password, 10)

			const updatedUser = await this.userModel.findByIdAndUpdate(
				id,
				{ ...updateUserDto, avatar: image, password: password },
				{ new: true }
			)

			if (!updatedUser)
				throw new BadRequestException('Update operation not acknowledged')

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

	async profile(req: Request): Promise<UserDocument> {
		try {
			const token = req.headers.authorization.split(' ')[1]
			const decodedToken = await this.jwtService.verify(token, {
				secret: process.env.SECRET_KEY
			})

			if (typeof decodedToken !== 'object' || !('id' in decodedToken))
				throw new BadRequestException('Invalid token format')

			const userId = decodedToken.id
			const user = await this.userModel.findById(userId)

			if (!user) throw new NotFoundException('User not found')

			return user
		} catch (error) {
			console.error(error)
			throw error
		}
	}

	async validateToken(token: string) {
		return this.jwtService.verify(token, {
			secret: process.env.SECRET_KEY
		})
	}
}
