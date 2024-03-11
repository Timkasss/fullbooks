import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { BooksModule } from './books/books.module'
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data'
import { AuthorsModule } from './authors/authors.module'
import { AuthorsAwardsModule } from './authors-awards/authors-awards.module'
import { SharedModule } from './shared/shared.module'
import { PostsModule } from './posts/posts.module'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		MongooseModule.forRoot(
			`mongodb+srv://Ivan:${process.env.CONNECTION_PASS}@cluster0.livtosq.mongodb.net/`
		),
		NestjsFormDataModule.config({ storage: MemoryStoredFile }),
		UsersModule,
		AuthModule,
		BooksModule,
		AuthorsModule,
		AuthorsAwardsModule,
		SharedModule,
		PostsModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
