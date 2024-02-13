import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { GoogleOAuthUserSchema, UserSchema } from 'src/schemas/user.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { UserController } from './user.controller'
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data'
import { HttpModule } from '@nestjs/axios'
import { ImageService } from 'src/utils/imageService.service'
import { SharedModule } from 'src/shared/shared.module'
import { AccessControlService } from 'src/shared/access-contol.service'

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Users', schema: UserSchema },
			{
				name: 'GoogleOAuthUser',
				schema: GoogleOAuthUserSchema
			}
		]),
		NestjsFormDataModule.config({ storage: MemoryStoredFile }),
		HttpModule,
		SharedModule
	],
	providers: [UsersService, ImageService, AccessControlService],
	exports: [UsersService],
	controllers: [UserController]
})
export class UsersModule {}
