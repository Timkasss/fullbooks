import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
	@ApiProperty({
		type: String,
		description: 'This is a required property'
	})
	@IsString()
	@MinLength(3)
	readonly username: string
	@ApiProperty({
		type: String,
		description: 'This is a required property'
	})
	@IsEmail()
	@IsString()
	readonly email: string
	@ApiProperty({
		type: String,
		description: 'This is a required property'
	})
	@IsString()
	@MinLength(6)
	readonly password: number
	@ApiProperty({
		type: String,
		description: 'This is a required property'
	})
	readonly date: string
}
