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

@Injectable()
export class AuthService {
	constructor(
		@InjectModel('Users') private userModel: Model<UserDocument>,
		@InjectModel('GoogleOAuthUser')
		private googleUserModel: Model<GoogleOAuthUserDocument>,
		private jwtService: JwtService,
		private usersService: UsersService
	) {}

	async signIn(
		email: string,
		pass: string
	): Promise<
		{ access_token: string } | { error: string } | { message: string }
	> {
		try {
			const userInUserModel: UserDocument | null = await this.userModel.findOne(
				{ email }
			)

			if (!userInUserModel) {
				const userInGoogleUserModel = await this.googleUserModel.findOne({
					email
				})

				if (!userInGoogleUserModel) {
					throw new NotFoundException('User not found')
				}

				console.log(
					'User found in GoogleOAuthUserModel:',
					userInGoogleUserModel
				)
				return {
					message:
						'Seems you are registered with Google. Please sign in with Google and change your password'
				}
			}

			const match: boolean = await bcrypt.compare(
				pass,
				userInUserModel.password
			)

			if (!match) {
				throw new NotFoundException('User not found')
			}

			const payload: { [key: string]: any } =
				this.createJwtPayload(userInUserModel)
			return {
				access_token: await this.jwtService.signAsync(payload)
			}
		} catch (error) {
			console.error('Error in signIn:', error.message)

			return {
				error: error.message
			}
		}
	}

	async signUp(
		createUserDto: CreateUserDto
	): Promise<{ access_token: string } | { error: string }> {
		try {
			const existingUserInUserModel = await this.userModel.findOne({
				email: createUserDto.email
			})

			if (!existingUserInUserModel) {
				const existingUserInGoogleUserModel =
					await this.googleUserModel.findOne({ email: createUserDto.email })

				if (!existingUserInGoogleUserModel) {
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

					const payload = {
						id: newUser._id,
						role: newUser.role
					}

					return {
						access_token: await this.jwtService.signAsync(payload)
					}
				}

				await existingUserInGoogleUserModel.save()

				const payload = {
					id: existingUserInGoogleUserModel._id,
					role: existingUserInGoogleUserModel.role
				}

				return {
					access_token: await this.jwtService.signAsync(payload)
				}
			}

			throw new NotFoundException('User already registered')
		} catch (error) {
			console.error('Error in signUp:', error.message)

			return {
				error: error.message
			}
		}
	}

	async validateUser(
		email: string,
		pass: string
	): Promise<{ [key: string]: any } | null> {
		const user: UserDocument | null | GoogleOAuthUserDocument =
			await this.usersService.findByEmail(email, 'local')

		if (!user) {
			throw new NotFoundException()
		}

		const { password, ...result } = user
		const match: boolean = await bcrypt.compare(pass, password)

		if (match) {
			return result
		}
		return null
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
				return {
					message: 'User information successfully retrieved from UserModel',
					user: existingUserInUserModel
				}
			}

			if (existingUserInGoogleUserModel) {
				return {
					message:
						'User information successfully retrieved from GoogleOAuthUserModel',
					user: existingUserInGoogleUserModel
				}
			}

			const newUser = new this.googleUserModel({
				accessToken: googleUser.accessToken,
				googleId: googleUser.googleId,
				email: googleUser.email,
				firstName: googleUser.firstName,
				lastName: googleUser.lastName,
				avatar: googleUser.picture,
				locale: googleUser.locale
			})

			await newUser.save()

			return {
				message: 'New user registered with Google OAuth',
				user: newUser
			}
		} catch (error) {
			console.error('Error in googleLogin:', error.message)

			return new HttpException(error.message, HttpStatus.BAD_REQUEST)
		}
	}

	private createJwtPayload(user: UserDocument): { [key: string]: any } {
		return {
			id: user._id,
			role: user.role
		}
	}
}
