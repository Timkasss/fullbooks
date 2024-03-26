import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthorSchema } from "src/schemas/author.schema";
import { AuthorsService } from "./authors.service";
import { AuthorsController } from "./authors.controller";
import { MemoryStoredFile, NestjsFormDataModule } from "nestjs-form-data";
import { ImageService } from "src/utils/imageService.service";
import { HttpModule } from "@nestjs/axios";
import { SharedModule } from "src/shared/shared.module";
import { AccessControlService } from "src/shared/access-contol.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Auhtors", schema: AuthorSchema }]),
    NestjsFormDataModule.config({
      storage: MemoryStoredFile,
    }),
    HttpModule,
    SharedModule,
  ],
  providers: [AuthorsService, ImageService, AccessControlService],
  controllers: [AuthorsController],
})
export class AuthorsModule {}
