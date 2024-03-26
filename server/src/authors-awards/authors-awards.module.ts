import { Module } from "@nestjs/common";
import { AuthorsAwardsController } from "./authors-awards.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthorsAwardsSchema } from "src/schemas/authors-awards.schema";
import { AuthorsAwardsService } from "./authors-awards.service";
import { HttpModule } from "@nestjs/axios";
import { ImageService } from "src/utils/imageService.service";
import { MemoryStoredFile, NestjsFormDataModule } from "nestjs-form-data";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Awards", schema: AuthorsAwardsSchema },
    ]),
    NestjsFormDataModule.config({ storage: MemoryStoredFile }),
    HttpModule,
  ],
  providers: [AuthorsAwardsService, ImageService],
  controllers: [AuthorsAwardsController],
})
export class AuthorsAwardsModule {}
