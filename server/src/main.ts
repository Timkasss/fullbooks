import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { INestApplication, ValidationPipe } from '@nestjs/common'

async function bootstrap() {
<<<<<<< HEAD
	const app = await NestFactory.create(AppModule, {
		// bufferLogs: true,
		// abortOnError: false
	}) //.catch(console.error)) as INestApplication
	app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }))
	// there are swagger connecting
=======
	const app = await NestFactory.create(AppModule, {})
	app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }))
>>>>>>> 4c33f43 (feature, fix / secure fix, books rating/views/likes/dislikes)
	const config = new DocumentBuilder()
		.setTitle('Book Shop')
		.setDescription('Doc of book shop api')
		.setVersion('1.0')
		.addServer('http://localhost:4000/', 'Local environment')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api-docs', app, document)
	app.enableCors()
	await app.listen(4000)
}
bootstrap()
