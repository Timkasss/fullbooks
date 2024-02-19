import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { GoogleOAuthUserDocument, UserDocument } from '../schemas/user.schema'
import { updateUserDto } from './dto/update-user.dto'
import { JwtService } from '@nestjs/jwt'
import { ImageService } from 'src/utils/imageService.service'
import { Request } from 'express'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
	constructor(
		@InjectModel('Users') private userModel: Model<UserDocument>,
		@InjectModel('GoogleOAuthUser')
		private googleUserModel: Model<GoogleOAuthUserDocument>,
		private jwtService: JwtService,
		private imageService: ImageService
	) {}

	async findByUsername(username: string): Promise<UserDocument> {
		const user = await this.userModel.findOne({ username })

		if (!user) throw new NotFoundException('User not found')
		return user
	}

	async findByEmail(
		email: string
	): Promise<UserDocument | null | GoogleOAuthUserDocument> {
		try {
			const userModel = await this.googleUserModel.findOne({ email })
			const googleUserModel = await this.userModel.findOne({ email })

			const user = userModel || googleUserModel

			if (!user) {
				return null
			}
			return user
		} catch (error) {
			throw error
		}
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

	async profile(req: Request): Promise<UserDocument | GoogleOAuthUserDocument> {
		try {
			if (!req.headers.authorization) {
				throw new BadRequestException("Token don't provided")
			}

			const token = req.headers.authorization.split(' ')[1]
			const decodedToken = await this.jwtService.verify(token, {
				secret: process.env.SECRET_KEY
			})

			if (typeof decodedToken !== 'object' || !('id' in decodedToken))
				throw new BadRequestException('Invalid token format')

			const userId = decodedToken.id
			const userModel = await this.userModel
				.findById(userId)
				.select('-password')
			const googleUserModel = await this.googleUserModel
				.findById(userId)
				.select('-password')

			const user = userModel || googleUserModel

			if (!user) throw new NotFoundException('User not found')

			return user
		} catch (error) {
			console.error(error)
			throw new BadRequestException(error.message)
		}
	}

	async validateToken(token: string) {
		return this.jwtService.verify(token, {
			secret: process.env.SECRET_KEY
		})
	}
}
