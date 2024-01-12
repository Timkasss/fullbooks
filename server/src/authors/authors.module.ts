import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthorSchema } from 'src/schemas/author.schema'
import { AuthorsService } from './authors.service'
import { AuthorsController } from './authors.controller'
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data'
import { ImageService } from 'src/utils/imageService.service'
import { HttpModule } from '@nestjs/axios'

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Auhtors', schema: AuthorSchema }]),
		NestjsFormDataModule.config({
			storage: MemoryStoredFile
		}),
		HttpModule
	],
	providers: [AuthorsService, ImageService],
	controllers: [AuthorsController]
})
export class AuthorsModule {}
