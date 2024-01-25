import {
	Body,
	Controller,
	HttpCode,
	HttpException,
	HttpStatus,
	NotFoundException,
	Post,
	Res
} from '@nestjs/common'
import { Response } from 'express'
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

@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: 'Sign In' })
	@ApiOkResponse({
		description: 'User found successfully'
	})
	@ApiNotFoundResponse({ description: 'User not found' })
	@ApiUnauthorizedResponse({ description: 'Unauthorized' })
	@ApiBadRequestResponse({ description: 'Bad Request' })
	@ApiBearerAuth()
	@Post('signin')
	async signIn(@Body() signInDto: LoginUserDto, @Res() res: Response) {
		try {
			const user = await this.authService.signIn(
				signInDto.email,
				signInDto.password
			)

			return res.json(user)
		} catch (error) {
			console.error(error)
			throw new NotFoundException('User not found')
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
	async signUp(@Body() signUpDto: CreateUserDto, @Res() res: Response) {
		try {
			const newUser = await this.authService.signUp(signUpDto)

			return res.json(newUser)
		} catch (error) {
			console.error(error)
			if (error.code === 11000) {
				throw new HttpException('User already exists', HttpStatus.CONFLICT)
			} else {
				throw new HttpException(
					'Failed to create user',
					HttpStatus.INTERNAL_SERVER_ERROR
				)
			}
		}
	}
}
