import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateAuthorDto {
	@ApiProperty({ description: 'Full name of Author', type: String })
	@IsString({ message: 'Full name must be a string' })
	readonly fullname: string
	@ApiProperty({ description: 'Birthday of an Author', type: String })
	@IsString({ message: 'birthday must be a string' })
	readonly birthday: string
	@ApiProperty({ description: "Place of Author's birth", type: String })
	@IsString({ message: 'Place of birth must a string' })
	readonly placeofbirth: string
	@ApiProperty({ description: 'Death date of an Author', type: String })
	@IsString({ message: 'Death date must be a string' })
	readonly deathdate: string
	@ApiProperty({ description: "Place of Author's death", type: String })
	@IsString({ message: 'Place of death must be a string' })
	readonly placeofdeath: string
	@ApiProperty({ description: 'Type of Author activity', type: String })
	@IsString({ message: 'Type activity must be a string' })
	readonly typeactivity: string
	@ApiProperty({ description: "Direction of Author's work", type: String })
	@IsString({ message: 'Direction must be a string' })
	readonly direction: string
	@ApiProperty({ description: "Genre of Author's works", type: String })
	@IsString({ message: 'Genre must be a string' })
	readonly genre: string
	@ApiProperty({ description: "Language of Author's books", type: String })
	@IsString({ message: 'Language works must be a string' })
	readonly languageworks: string
	@ApiProperty({ description: "Author's image" })
	readonly image: any
}
