import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from 'src/schemas/user.schema'
import { GoogleStrategy } from './google.strategy'
import { MailModule } from 'src/utils/mail/mail.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		JwtModule.register({
			global: true,
			secret: process.env.SECRET_KEY,
			signOptions: { expiresIn: '14d' }
		}),
		MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]),
		UsersModule,
		PassportModule,
		MailModule
	],
	providers: [AuthService, GoogleStrategy],
	controllers: [AuthController],
	exports: [AuthService]
})
export class AuthModule {}
