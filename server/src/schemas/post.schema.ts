import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, ObjectId, SchemaTypes } from "mongoose";

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ unique: true, required: true, type: String })
  title: string;
  @Prop({ required: true, type: String })
  content: string;
  @Prop({ type: String })
  image: string;
  @Prop({ type: SchemaTypes.ObjectId, ref: "Users" })
  author: ObjectId;
  @Prop({ required: true, type: String })
  date: string;
  @Prop({ required: true, type: String })
  category: string;
  @Prop({ type: [String], default: [] })
  tags: string[];
  @Prop({ required: true, type: Number, default: 0 })
  views: number;
  @Prop({ required: true, type: Number, default: 0 })
  likes: number;
  @Prop({ required: true, type: Number, default: 0 })
  dislikes: number;
  @Prop({ type: [String], default: [] })
  comments: string[];
  @Prop({ required: true, type: String })
  video: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
