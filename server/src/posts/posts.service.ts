import {
	HttpException,
	HttpStatus,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { PostDocument } from '../schemas/post.schema'
import { CreatePostDto } from './create-post.dto'
import { Request } from 'express'
import { JwtService } from '@nestjs/jwt'
import { ImageService } from '../utils/imageService.service'

@Injectable()
export class PostsService {
	constructor(
		@InjectModel('Posts') private PostsModel: Model<PostDocument>,
		private jwtService: JwtService,
		private imageService: ImageService
	) {}

	async createPost(postDto: CreatePostDto, req: Request) {
		try {
			const token = req.headers.authorization.split(' ')[1]
			const decodedToken = await this.jwtService.decode(token)

			const authorId = new Types.ObjectId(decodedToken._id || decodedToken.id)

			const image = await this.imageService.uploadImage(postDto.image)
			const date = this.generateDate()

			const post = await new this.PostsModel({
				...postDto,
				author: authorId,
				image: image,
				date: date
			}).save()

			await post.populate([{ path: 'author', select: '-password' }])

			return post
		} catch (e) {
			throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
		}
	}

	async getPosts() {
		try {
			return await this.PostsModel.find().populate([
				{ path: 'author', select: '-password' }
			])
		} catch (e) {
			throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
		}
	}

	async getPost(id: string) {
		try {
			const post = await this.PostsModel.findById(id).populate([
				{ path: 'author', select: '-password' }
			])

			if (!post) {
				throw new HttpException('Post not found', 404)
			}

			return post
		} catch (e) {
			throw new HttpException(e.message, e.status)
		}
	}

	async deletePost(id: string) {
		try {
			const post = await this.PostsModel.findByIdAndDelete(id)

			if (!post) {
				throw new HttpException('Post not found', 404)
			}

			return {
				message: 'Post has been removed'
			}
		} catch (e) {
			throw new HttpException(e.message, e.status)
		}
	}

	async getPostsByAuthor(authorId: string) {
		try {
			const post = await this.PostsModel.findOne({
				author: authorId
			}).populate([{ path: 'author', select: '-password' }])

			if (!post) {
				throw new HttpException('Post not found', 404)
			}

			return post
		} catch (e) {
			throw new HttpException(e.message, e.status)
		}
	}

	async getPostsByTag(tags: string[]) {
		try {
			const posts = this.PostsModel.find({
				tags: { $all: tags }
			})
				.populate([{ path: 'author', select: '-password' }])
				.exec()

			const result = await posts

			if (result.length === 0 || !result) {
				throw new NotFoundException()
			}
			return posts
		} catch (e) {
			throw new HttpException(e.message, e.status)
		}
	}

	async getPostsByCategory(category: string) {
		try {
			const posts = await this.PostsModel.find({
				category: category
			}).populate([{ path: 'author', select: '-password' }])

			if (!posts) {
				throw new HttpException('Post not found', 404)
			}

			return posts
		} catch (e) {
			throw new HttpException(e.message, e.status)
		}
	}

	private generateDate(): string {
		const date_ob = new Date()
		const date = ('0' + date_ob.getDate()).slice(-2)
		const month = ('0' + (date_ob.getMonth() + 1)).slice(-2)
		const year = date_ob.getFullYear()
		const hours = date_ob.getHours()
		const minutes = date_ob.getMinutes()

		return year + '-' + month + '-' + date + ' ' + hours + ':' + minutes
	}
}
