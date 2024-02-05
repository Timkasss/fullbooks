import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Req,
	Res,
	UseGuards
} from '@nestjs/common'
import { Request, Response } from 'express'
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
	async signUp(@Body() signUpDto: CreateUserDto, @Res() res: Response) {
		try {
			const newUser = await this.authService.signUp(signUpDto)

			return res.json(newUser)
		} catch (error) {
			console.error(error)
			throw error
		}
	}

	@Get('google')
	@UseGuards(AuthGuard('google'))
	async googleAuth(@Req() req: Request) {}

	@Get('google/redirect')
	@UseGuards(AuthGuard('google'))
	async googleAuthRedirect(@Req() req: Request) {
		return this.authService.googleLogin(req)
	}
}
