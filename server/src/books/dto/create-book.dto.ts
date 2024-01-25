import { IsString, IsNumber, isString, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateBookDto {
	@ApiProperty({ description: 'Title of the book', type: String })
	@IsString({ message: 'Title must be a string' })
	readonly title: string

	@ApiProperty({ description: 'Subtitle of the book', type: String })
	@IsString({ message: 'SubTitle must be a string' })
	readonly subTitle: string

	@ApiProperty({ description: 'Authors of the book', type: String })
	@IsString({ message: 'Authors must be a string' })
	readonly authors: string

	@ApiProperty({ description: 'Genre of the book', type: String })
	@IsString({ message: 'Genre must be a string' })
	readonly genre: string

	@ApiProperty({ description: 'Rating of the book', type: {} })
	@IsString({ message: 'Rating must be a string' })
	@IsOptional()
	readonly grade: {
		rating: number
		likes: number
		dislikes: number
		views: number
	}

	@ApiProperty({ description: 'Language of the book', type: String })
	@IsString({ message: 'Language must be a string' })
	readonly language: string

	@ApiProperty({
		description: 'Published date of the book',
		type: String
	})
	@IsString({ message: 'PublishedDate must be a string' })
	readonly publishedDate: string

	@ApiProperty({ description: 'Publisher of the book', type: String })
	@IsString({ message: 'Publisher must be a string' })
	readonly publisher: string

	@ApiProperty({ description: 'Description of the book', type: String })
	@IsString({ message: 'Description must be a string' })
	readonly description: string

	@ApiProperty({ description: 'Count of pages', type: String })
	@IsString({ message: 'Pages must be a string' })
	readonly pages: string

	@ApiProperty({ description: 'URL to the image of the book', type: String })
	readonly image: any
}
