import {Prop, SchemaFactory, Schema} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'


export type AuthorDocument = HydratedDocument<Author>
@Schema()
export class Author {
	@Prop({unique: true, required: true, type: String})
	fullname: string
	@Prop({required: true, type: String})
	birthday: string
	@Prop({required: true, type: String})
	placeofbirth: string
	@Prop({required: true, type: String})
	deathdate: string
	@Prop({required: true, type: String})
	placeofdeath: string
	@Prop({required: true, type: String})
	typeactivity: string
	@Prop({required: true, type: String})
	direction: string
	@Prop({required: true, type: String})
	languageworks: string

}

export const AuthorSchema = SchemaFactory.createForClass(Author)
