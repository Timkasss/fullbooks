import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>
@Schema()
export class User {
	@Prop({ unique: true, required: true, type: String })
	username: string

	@Prop({ unique: true, required: true, type: String })
	email: string

	@Prop({ required: true })
	password: string

	@Prop({ required: true })
	date: string

	@Prop({ type: String })
	avatar: string

	@Prop({ default: 'USER' })
	role: string
}
export const UserSchema = SchemaFactory.createForClass(User)

export type GoogleOAuthUserDocument = HydratedDocument<GoogleOAuthUser>

@Schema()
export class GoogleOAuthUser {
	@Prop({ type: String, required: true })
	googleId: string

	@Prop({ type: String, required: true })
	email: string

	@Prop({ type: String, required: true })
	firstName: string

	@Prop({ type: String, required: true })
	lastName: string

	@Prop({ type: String, default: '' })
	password: string

	@Prop({ type: String, required: true })
	avatar: string

	@Prop({ type: String, required: true })
	locale: string

	@Prop({ type: String, required: true })
	accessToken: string

	@Prop({ default: 'USER' })
	role: string
}

export const GoogleOAuthUserSchema =
	SchemaFactory.createForClass(GoogleOAuthUser)
