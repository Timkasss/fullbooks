import { Module } from '@nestjs/common'
import { BooksService } from './books.service'
import { BooksController } from './books.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { BookSchema } from 'src/schemas/book.schema'
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data'
import { HttpModule } from '@nestjs/axios'

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Books', schema: BookSchema }]),
		NestjsFormDataModule.config({ storage: MemoryStoredFile }),
		HttpModule
	],
	providers: [BooksService],
	controllers: [BooksController]
})
export class BooksModule {}
