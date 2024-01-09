import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type BookDocument = HydratedDocument<Book>
@Schema()
export class Book {
	@Prop({ unique: true, required: true, type: String })
	title: string
	@Prop({ required: true, type: String })
	subTitle: string
	@Prop({ required: true, type: String })
	authors: string
	@Prop({ required: true, type: String })
	genre: string
	@Prop({ required: true, type: String })
	rating: string
	@Prop({ required: true, type: String })
	language: string
	@Prop({ required: true, type: String })
	publishedDate: string
	@Prop({ required: true, type: String })
	publisher: string
	@Prop({ required: true, type: String })
	description: string
	@Prop({ required: true, type: String })
	pages: string
	@Prop({ required: true, type: String })
	image: string
}

export const BookSchema = SchemaFactory.createForClass(Book)
