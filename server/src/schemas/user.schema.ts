import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ unique: true, required: true, type: String })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  date: string;

  @Prop({
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1024px-Missing_avatar.svg.png",
  })
  picture: string;

  @Prop({ type: String, required: true, default: "en" })
  locale: string;

  @Prop({ default: "USER" })
  role: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
