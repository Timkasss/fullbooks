import { MailerModule } from '@nestjs-modules/mailer'
import { Module } from '@nestjs/common'
import { MailService } from './mail.service'
import { join } from 'path'
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import { ConfigModule } from '@nestjs/config'
@Module({
	imports: [
		ConfigModule.forRoot(),
		MailerModule.forRoot({
			transport: `smtps://developerjsua@gmail.com:bosj wxay jneg ssep @smtp.gmail.com`,
			defaults: {
				from: `"Books App" <${process.env.EMAIL_NAME}>`
			},
			template: {
				dir: join(__dirname, 'templates'),
				adapter: new HandlebarsAdapter(),
				options: {
					strict: true
				}
			}
		})
	],
	providers: [MailService],
	exports: [MailService]
})
export class MailModule {}
