import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AuthorsAwardsDocument = HydratedDocument<Award>;

@Schema()
export class Award {
  @Prop({ unique: true, required: true, type: String })
  image: any;
}

export const AuthorsAwardsSchema = SchemaFactory.createForClass(Award);
