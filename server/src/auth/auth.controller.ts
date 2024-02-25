import {
	BadRequestException,
	Body,
	Controller,
	Get,
	HttpCode,
	HttpException,
	HttpStatus,
	Post,
	Req,
	UseGuards
} from '@nestjs/common'
import { Request } from 'express'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { AuthService } from './auth.service'
import {
	ApiBadRequestResponse,
	ApiBearerAuth,
	ApiCreatedResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse
} from '@nestjs/swagger'
import { LoginUserDto } from 'src/users/dto/loginin-user.dto'
import { AuthGuard } from '@nestjs/passport'
import { User, UserDocument } from '../schemas/user.schema'
import { MailService } from '../utils/mail/mail.service'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService,
		private mailService: MailService,
		private jwtService: JwtService,
		@InjectModel('Users') private userModel: Model<UserDocument>
	) {}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: 'Sign In' })
	@ApiOkResponse({
		description: 'User found successfully'
	})
	@ApiNotFoundResponse({ description: 'User not found' })
	@ApiUnauthorizedResponse({ description: 'Unauthorized' })
	@ApiBadRequestResponse({ description: 'Bad Request' })
	@ApiBearerAuth()
	@Get('signin')
	async signIn(@Body() signInDto: LoginUserDto) {
		try {
			const { password, email } = signInDto
			if (!email || !password) {
				throw new BadRequestException()
			}
			const userInUserModel: UserDocument | null = await this.userModel.findOne(
				{ email }
			)

			if (!userInUserModel) {
				throw new HttpException(
					'Password or email not found',
					HttpStatus.NOT_FOUND
				)
			}

			const user = await this.authService.signIn(
				signInDto.email,
				signInDto.password
			)

			return {
				access_token: await this.jwtService.signAsync({
					id: user._id,
					role: user.role
				})
			}
		} catch (error) {
			console.error(error)
			throw error
		}
	}

	@HttpCode(HttpStatus.CREATED)
	@ApiOperation({ summary: 'Sign Up' })
	@ApiCreatedResponse({
		description: 'User created successfully'
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	@ApiBearerAuth()
	@Post('signup')
	async signUp(@Body() signUpDto: CreateUserDto) {
		try {
			const existingUserInUserModel = await this.userModel.findOne({
				email: signUpDto.email
			})

			if (existingUserInUserModel) {
				throw new HttpException('User already exists', HttpStatus.CONFLICT)
			}
			const user = await this.authService.signUp(signUpDto)

			return {
				token: await this.jwtService.signAsync({
					id: user._id,
					role: user.role
				})
			}
		} catch (error) {
			console.error(error)

			throw error
		}
	}

	@Get('google')
	@UseGuards(AuthGuard('google'))
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async googleAuth(@Req() req: Request) {}

	@Get('google/redirect')
	@UseGuards(AuthGuard('google'))
	async googleAuthRedirect(@Req() req: Request<User>) {
		const generatedPass = this.passwordGeneration(10)
		const user = await this.authService.googleLogin(req, generatedPass)

		await this.mailService.sendEmail(generatedPass, user.email)

		return {
			token: await this.jwtService.signAsync({
				id: user._id,
				role: user.role
			})
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
}
