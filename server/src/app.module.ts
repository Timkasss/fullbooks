import {
	MiddlewareConsumer,
	Module,
	NestModule,
	RequestMethod
} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { UserSchema } from './schemas/user.schema'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { JwtMiddleware } from './users/permission.middleware'
import { BooksModule } from './books/books.module'
import { MemoryStoredFile, NestjsFormDataModule } from 'nestjs-form-data'
import { HttpService } from '@nestjs/axios'
import { RbacMiddleware } from './users/rbac.middleware'
import { AuthorsModule } from './authors/authors.module'
import { AuthorsAwardsModule } from './authors-awards/authors-awards.module'
@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		MongooseModule.forRoot(
			`mongodb+srv://Ivan:${process.env.CONNECTION_PASS}@cluster0.livtosq.mongodb.net/`
		),
		NestjsFormDataModule.config({ storage: MemoryStoredFile }),
		// MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]),
		UsersModule,
		AuthModule,
		BooksModule,
		AuthorsModule,
		AuthorsAwardsModule
	],
	controllers: [],
	providers: []
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(JwtMiddleware)
			.forRoutes({ path: 'users/:id', method: RequestMethod.ALL }) //('users/:id', 'books/:id')

		consumer
			.apply(RbacMiddleware)
			.forRoutes({ path: 'books/:id', method: RequestMethod.DELETE })
	}
}
