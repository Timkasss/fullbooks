import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { PostDocument } from "../schemas/post.schema";
import { CreatePostDto } from "./create-post.dto";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";
import { ImageService } from "../utils/imageService.service";
import { GenerateDateService } from "../utils/generateDate.service";

@Injectable()
export class PostsService {
  constructor(
    @InjectModel("Posts") private PostsModel: Model<PostDocument>,
    private jwtService: JwtService,
    private imageService: ImageService,
    private generateDateService: GenerateDateService
  ) {}

  async createPost(postDto: CreatePostDto, req: Request) {
    try {
      if (!req.headers.authorization) throw new ForbiddenException();

      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = await this.jwtService.decode(token);

      const authorId = new Types.ObjectId(decodedToken._id || decodedToken.id);

      const image = await this.imageService.uploadImage(postDto.image);
      const date = this.generateDateService.generateDate();

      const post = await new this.PostsModel({
        ...postDto,
        author: authorId,
        image: image,
        date: date,
      }).save();

      await post.populate([{ path: "author", select: "-password" }]);

      return post;
    } catch (e) {
      console.log(e);
      if (e.code === 11000) {
        throw new HttpException(
          "A post with similar content already exists",
          HttpStatus.CONFLICT
        );
      } else {
        throw new HttpException(e.message, e.status);
      }
    }
  }

  async getPosts() {
    try {
      return await this.PostsModel.find().populate([
        { path: "author", select: "-password" },
      ]);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getPost(id: string) {
    try {
      const post = await this.PostsModel.findByIdAndUpdate(id, {
        $inc: { views: 1 },
      }).populate([{ path: "author", select: "-password" }]);

      if (!post) {
        throw new HttpException("Post not found", 404);
      }

      return post;
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }

  async deletePost(id: string) {
    try {
      const post = await this.PostsModel.findByIdAndDelete(id);

      if (!post) {
        throw new HttpException("Post not found", 404);
      }

      return {
        message: "Post has been removed",
      };
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }

  async getPostsByAuthor(authorId: string) {
    try {
      const post = await this.PostsModel.findOne({
        author: authorId,
      }).populate([{ path: "author", select: "-password" }]);

      if (!post) {
        throw new HttpException("Post not found", 404);
      }

      return post;
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }

  async getPostsByTag(tags: string[]) {
    try {
      const posts = this.PostsModel.find({
        tags: { $all: tags },
      })
        .populate([{ path: "author", select: "-password" }])
        .exec();

      const result = await posts;

      if (result.length === 0 || !result) {
        throw new NotFoundException();
      }
      return posts;
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }

  async getPostsByCategory(category: string) {
    try {
      const posts = await this.PostsModel.find({
        category: category,
      }).populate([{ path: "author", select: "-password" }]);

      if (!posts) {
        throw new HttpException("Post not found", 404);
      }

      return posts;
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }

  async giveLike(id: string) {
    const post = await this.PostsModel.findOneAndUpdate(
      { _id: id },
      {
        $inc: { likes: 1 },
      },
      { new: true }
    );
    console.log(post);
    if (!post) throw new NotFoundException();
    return post;
  }

  async giveDislike(id: string) {
    const post = await this.PostsModel.findOneAndUpdate(
      { _id: id },
      {
        $inc: { dislikes: 1 },
      },
      { new: true }
    );
    if (!post) throw new NotFoundException();
    return post;
  }

  async removeLike(id: string) {
    const post = await this.PostsModel.findOneAndUpdate(
      { _id: id, likes: { $gte: 1 } },
      {
        $inc: { likes: -1 },
      },
      { new: true }
    );
    if (!post) throw new NotFoundException();
    return post;
  }

  async removeDislike(id: string) {
    const post = await this.PostsModel.findOneAndUpdate(
      { _id: id, dislikes: { $gte: 1 } },
      {
        $inc: { dislikes: -1 },
      },
      { new: true }
    );
    console.log(post);
    if (!post) throw new NotFoundException();
    return post;
  }
}
