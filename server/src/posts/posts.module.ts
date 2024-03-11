import { Module } from '@nestjs/common'
import { PostsService } from './posts.service'
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data'
import { HttpModule } from '@nestjs/axios'
import { PostsController } from './posts.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { PostSchema } from '../schemas/post.schema'
import { AccessControlService } from '../shared/access-contol.service'
import { UserSchema } from '../schemas/user.schema'
import { ImageService } from '../utils/imageService.service'
import { GenerateDateService } from '../utils/generateDate.service'

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Posts', schema: PostSchema }]),
		MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]),
		NestjsFormDataModule.config({ storage: MemoryStoredFile }),
		HttpModule
	],
	exports: [],
	providers: [
		PostsService,
		AccessControlService,
		ImageService,
		GenerateDateService
	],
	controllers: [PostsController]
})
export class PostsModule {}
