import { Injectable, UploadedFile, UseInterceptors } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import path from 'path'

@Injectable()
export class FileUploadingService {
	constructor(private readonly httpService: HttpService) {}
	@UseInterceptors(
		FileInterceptor('file', {
			storage: diskStorage({
				destination: './assets/pdfs/',
				filename: (req, file, cb) => {
					const fileName =
						path.parse(file.originalname).name.replace(/\s/g, '') + Date.now()
					const extension = path.parse(file.originalname).ext
					cb(null, `${fileName}.${extension}`)
				}
			})
		})
	)
	uploadFile(@UploadedFile() file: any) {
		return file
	}
}
