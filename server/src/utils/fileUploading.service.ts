import { Injectable } from '@nestjs/common'
import * as mega from 'megajs'

@Injectable()
export class FileUploadingService {
	async uploadFileToMega(fileBuffer: any): Promise<string> {
		try {
			const storage = await mega({
				email: process.env.EMAIL_NAME,
				password: process.env.PASS_TO_MEGA
			}).ready

			const upload = await storage.upload(
				`${Date.now()}.pdf`,
				Buffer.from(fileBuffer.buffer, 'base64')
			).complete

			const key = upload.key.toString('base64')
			const link = await upload.link(true)
			const encryptedLink = `${link}#${key}`
			console.log(encryptedLink)

			return encryptedLink
		} catch (error) {
			throw new Error('Failed to upload file to Mega: ' + error.message)
		}
	}
}
