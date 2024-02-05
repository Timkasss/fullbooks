import {
	HttpException,
	HttpStatus,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UsersService } from 'src/users/users.service'
import { GoogleOAuthUserDocument, UserDocument } from 'src/schemas/user.schema'
import { MailService } from 'src/utils/mail/mail.service'

@Injectable()
export class AuthService {
	constructor(
		@InjectModel('Users') private userModel: Model<UserDocument>,
		@InjectModel('GoogleOAuthUser')
		private googleUserModel: Model<GoogleOAuthUserDocument>,
		private jwtService: JwtService,
		private usersService: UsersService,
		private mailService: MailService
	) {}

	async signIn(email: string, pass: string): Promise<{ access_token: string }> {
		try {
			const userInUserModel: UserDocument | null = await this.userModel.findOne(
				{ email }
			)
			const userInGoogleUserModel: null | GoogleOAuthUserDocument =
				await this.googleUserModel.findOne({
					email
				})

			if (!userInUserModel && !userInGoogleUserModel) {
				throw new NotFoundException('User not found')
			}

			const match: boolean = await bcrypt.compare(
				pass,
				userInUserModel
					? userInUserModel.password
					: userInGoogleUserModel.password
			)

			if (!match)
				throw new HttpException(
					'Password or email not found',
					HttpStatus.BAD_REQUEST
				)

			const dataForPayload = userInUserModel
				? userInUserModel
				: userInGoogleUserModel

			const payload = this.createJwtPayload(dataForPayload)

			return {
				access_token: await this.jwtService.signAsync(payload)
			}
		} catch (error) {
			console.error('Error in signIn:', error.message)

			throw error
		}
	}

	async signUp(
		createUserDto: CreateUserDto
	): Promise<{ access_token: string }> {
		try {
			const existingUserInUserModel = await this.userModel.findOne({
				email: createUserDto.email
			})
			const existingUserInGoogleUserModel = await this.googleUserModel.findOne({
				email: createUserDto.email
			})

			if (existingUserInUserModel || existingUserInGoogleUserModel) {
				throw new HttpException('User already exists', HttpStatus.CONFLICT)
			}

			const newUser = new this.userModel(createUserDto)
			const salt = await bcrypt.genSalt(10)
			const hashPassword = await bcrypt.hash(newUser.password, salt)

			newUser.password = hashPassword

			let date_ob = new Date()
			let date = ('0' + date_ob.getDate()).slice(-2)
			let month = ('0' + (date_ob.getMonth() + 1)).slice(-2)
			let year = date_ob.getFullYear()
			let hours = date_ob.getHours()
			let minutes = date_ob.getMinutes()
			newUser.date =
				year + '-' + month + '-' + date + ' ' + hours + ':' + minutes

			await newUser.save()

			const payload = this.createJwtPayload(newUser)

			return {
				access_token: await this.jwtService.signAsync(payload)
			}
		} catch (error) {
			console.error('Error in signUp:', error.message)

			throw new HttpException(error.message, error.status)
		}
	}

	async googleLogin(req) {
		try {
			const googleUser = req.user

			const existingUserInUserModel = await this.usersService.findByEmail(
				googleUser.email,
				'local'
			)
			const existingUserInGoogleUserModel = await this.usersService.findByEmail(
				googleUser.email,
				'google'
			)

			if (existingUserInUserModel) {
				const payload = this.createJwtPayload(existingUserInUserModel)

				return {
					access_token: await this.jwtService.signAsync(payload)
				}
			}

			if (existingUserInGoogleUserModel) {
				const payload = this.createJwtPayload(existingUserInGoogleUserModel)

				return {
					access_token: await this.jwtService.signAsync(payload)
				}
			}

			const generatedPass = this.passwordGeneration(10)

			const salt = await bcrypt.genSalt(10)
			const hashPassword = await bcrypt.hash(generatedPass, salt)

			const newUser = new this.googleUserModel({
				accessToken: googleUser.accessToken,
				googleId: googleUser.googleId,
				email: googleUser.email,
				firstName: googleUser.firstName,
				lastName: googleUser.lastName,
				avatar: googleUser.picture,
				locale: googleUser.locale,
				password: hashPassword
			})

			await newUser.save()

			await this.mailService.sendEmail(newUser, generatedPass)

			const payload = this.createJwtPayload(newUser)

			return {
				access_token: await this.jwtService.signAsync(payload)
			}
		} catch (error) {
			console.error('Error in googleLogin:', error.message)

			throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
		}
	}

	private passwordGeneration(length: number): string {
		const charset =
			'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
		let password = ''

		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * charset.length)

			password += charset.charAt(randomIndex)
		}

		return password
	}

	private createJwtPayload(user: UserDocument | GoogleOAuthUserDocument): {
		[key: string]: any
	} {
		return {
			id: user._id,
			role: user.role
		}
	}
}
