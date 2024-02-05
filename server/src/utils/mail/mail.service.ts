import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class MailService {
	constructor(private mailerService: MailerService) {}

	async sendEmail(user: any, password: string) {
		const name = user.firstName
		await this.mailerService.sendMail({
			to: user.email,
			subject: 'Look! Here is your password',
			template: './showPass',
			context: {
				name,
				password,
				appName: 'Books App'
			}
		})
	}
}
