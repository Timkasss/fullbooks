import { IsEmail } from 'class-validator'

export class CreateGoogleUserDto {
	readonly accessToken: string
	readonly googleId: string
	readonly email: string
	readonly firstName: string
	readonly lastName: string
	readonly avatar: string
	readonly locale: string
}
