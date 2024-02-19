import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type PostDocument = HydratedDocument<Post>

@Schema()
export class Post {
	@Prop({ required: true, type: String })
	title: string
	@Prop({ required: true, type: String })
	content: string
	@Prop({ required: true, type: String })
	image: string
	@Prop({ required: true, type: String })
	author: string
	@Prop({ required: true, type: String })
	date: string
	@Prop({ required: true, type: String })
	category: string
	@Prop({ required: true, type: String })
	tags: string
	@Prop({ required: true, type: Number })
	views: number
	@Prop({ required: true, type: Number })
	likes: number
	@Prop({ required: true, type: Number })
	dislikes: number
	@Prop({ required: true, type: [String] })
	comments: string[]
	@Prop({ required: true, type: String })
	video: string
}

export const PostSchema = SchemaFactory.createForClass(Post)
