import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
	@ApiProperty({
		type: String,
		description: 'This is a required property'
	})
	@IsString()
	@MinLength(3)
	readonly firstName: string
	@ApiProperty({
		type: String,
		description: 'This is a required property'
	})
	@IsString()
	@MinLength(2)
	readonly lastName: string
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
	readonly password: string
	@ApiProperty({
		type: String,
		description: 'This is a required property'
	})
	readonly date: string
}
