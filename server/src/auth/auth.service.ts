import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UsersService } from 'src/users/users.service'
import { User, UserDocument } from 'src/schemas/user.schema'
import { Request } from 'express'

@Injectable()
export class AuthService {
	constructor(
		@InjectModel('Users') private userModel: Model<UserDocument>,
		private jwtService: JwtService,
		private usersService: UsersService
	) {}
	async signIn(email: string, pass: string): Promise<UserDocument> {
		try {
			const userInUserModel: UserDocument | null = await this.userModel.findOne(
				{ email }
			)
			const user = userInUserModel
			const match: boolean = await bcrypt.compare(pass, user.password)

			if (!match || !user) {
				throw new HttpException(
					'Password or email not found',
					HttpStatus.NOT_FOUND
				)
			}

			return user
		} catch (error) {
			console.error('Error in signIn:', error.message)
			throw error
		}
	}

	async signUp(createUserDto: CreateUserDto): Promise<UserDocument> {
		try {
			const newUser = new this.userModel(createUserDto)
			const salt = await bcrypt.genSalt(10)
			newUser.password = await bcrypt.hash(newUser.password, salt)

			newUser.date = this.generateDate()
			return await newUser.save()
		} catch (error) {
			console.error('Error in signUp:', error.message)

			throw error
		}
	}

	async googleLogin(
		req: Request<User>,
		generatedPass: string
	): Promise<UserDocument> {
		try {
			const googleUser: User = <User>req.user

			const existingUser = await this.usersService.findByEmail(googleUser.email)

			if (existingUser) {
				return existingUser
			}

			const salt = await bcrypt.genSalt(10)
			const hashPassword = await bcrypt.hash(generatedPass, salt)

			const date = this.generateDate()

			const newUser = new this.userModel({
				firstName: googleUser.firstName,
				lastName: googleUser.lastName,
				email: googleUser.email,
				picture: googleUser.picture,
				locale: googleUser.locale,
				password: hashPassword,
				date: date
			})

			return await newUser.save()
		} catch (error) {
			console.error('Error in googleLogin:', error.message)

			throw error
		}
	}

	private generateDate(): string {
		const date_ob = new Date()
		const date = ('0' + date_ob.getDate()).slice(-2)
		const month = ('0' + (date_ob.getMonth() + 1)).slice(-2)
		const year = date_ob.getFullYear()
		const hours = date_ob.getHours()
		const minutes = date_ob.getMinutes()

		return year + '-' + month + '-' + date + ' ' + hours + ':' + minutes
	}
}
