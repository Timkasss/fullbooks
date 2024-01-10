import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Request,
	Res,
	UseGuards
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
import { LocalAuthGuard } from './local-auth.guard'
import { JwtAuthGuard } from './jwt-auth.guard'

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
	@UseGuards(LocalAuthGuard)
	@Post('signin')
	async signIn(
		@Body() signInDto: LoginUserDto,
		@Res() res: Response
	): Promise<void> {
		try {
			const user = await this.authService.signIn(
				signInDto.email,
				signInDto.password
			)

			res.status(HttpStatus.OK).json(user)
		} catch (error) {
			console.error(error)

			res.status(error.status).json({
				statusCode: error.status,
				message: error.response.message
			})
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
	async signUp(
		@Body() signUpDto: CreateUserDto,
		@Res() res: Response
	): Promise<void> {
		try {
			const newUser = await this.authService.signUp(signUpDto)

			res.status(HttpStatus.CREATED).json(newUser)
		} catch (error) {
			console.error(error)

			res.status(HttpStatus.BAD_REQUEST).json({
				statusCode: HttpStatus.BAD_REQUEST,
				message: 'Bad Request'
			})
		}
	}

	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	@ApiUnauthorizedResponse({ description: 'Unauthorized' })
	@ApiOperation({
		summary: 'Get User Profile',
		description: 'Get User Profile (work only via Bearer tokens)'
	})
	@ApiOkResponse({
		description: 'User profile retrieved successfully'
	})
	@Get('profile')
	getProfile(@Request() req): CreateUserDto {
		return req.user
	}
}
