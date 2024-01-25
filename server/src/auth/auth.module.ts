import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from 'src/schemas/user.schema'
<<<<<<< HEAD
import { LocalStrategy } from './local.strategy'
import { JwtStrategy } from './jwt.strategy'
import { JwtAuthGuard } from './jwt-auth.guard'
=======
>>>>>>> 4c33f43 (feature, fix / secure fix, books rating/views/likes/dislikes)

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
		PassportModule
	],
<<<<<<< HEAD
	providers: [AuthService, LocalStrategy, JwtStrategy],
=======
	providers: [AuthService],
>>>>>>> 4c33f43 (feature, fix / secure fix, books rating/views/likes/dislikes)
	controllers: [AuthController],
	exports: [AuthService]
})
export class AuthModule {}
