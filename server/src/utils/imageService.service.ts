import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class ImageService {
	constructor(private readonly httpService: HttpService) {}

	async uploadImage(image: any) {
		const formData = new FormData()
		formData.append('image', image.buffer.toString('base64'))
		const uploadUrl = `https://api.imgbb.com/1/upload?key=${process.env.IMG_API_KEY}`
		const { data: imageData } = await firstValueFrom(
			this.httpService.post(uploadUrl, formData)
		)
		return imageData.data.url
	}
}
