import {
	Body,
	Controller,
<<<<<<< HEAD
	Get,
=======
>>>>>>> 4c33f43 (feature, fix / secure fix, books rating/views/likes/dislikes)
	HttpCode,
	HttpException,
	HttpStatus,
	NotFoundException,
	Post,
<<<<<<< HEAD
	Request,
	Res,
	UseGuards
=======
	Res
>>>>>>> 4c33f43 (feature, fix / secure fix, books rating/views/likes/dislikes)
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
<<<<<<< HEAD
import { LocalAuthGuard } from './local-auth.guard'
import { JwtAuthGuard } from './jwt-auth.guard'
=======
>>>>>>> 4c33f43 (feature, fix / secure fix, books rating/views/likes/dislikes)

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
<<<<<<< HEAD

	// 	@UseGuards(JwtAuthGuard)
	// 	@ApiBearerAuth()
	// 	@ApiUnauthorizedResponse({ description: 'Unauthorized' })
	// 	@ApiOperation({
	// 		summary: 'Get User Profile',
	// 		description: 'Get User Profile (work only via Bearer tokens)'
	// 	})
	// 	@ApiOkResponse({
	// 		description: 'User profile retrieved successfully'
	// 	})
	// 	@Get('profile')
	// 	getProfile(@Request() req): CreateUserDto {
	// 		return req.user
	// 	}
=======
>>>>>>> 4c33f43 (feature, fix / secure fix, books rating/views/likes/dislikes)
}
