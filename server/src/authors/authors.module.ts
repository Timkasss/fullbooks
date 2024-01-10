import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthorSchema } from 'src/schemas/author.schema'
import { AuthorsService } from './authors.service'
import { AuthorsController } from './authors.controller'
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data'

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Auhtors', schema: AuthorSchema }]),
		NestjsFormDataModule.config({
			storage: MemoryStoredFile
		})
	],
	providers: [AuthorsService],
	controllers: [AuthorsController]
})
export class AuthorsModule {}
