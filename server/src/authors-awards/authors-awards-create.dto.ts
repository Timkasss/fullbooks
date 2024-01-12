import { ApiProperty } from '@nestjs/swagger'

export class CreateAwardDto {
	@ApiProperty({ description: 'URL to the image of the awards', type: String })
	readonly image: any
}
