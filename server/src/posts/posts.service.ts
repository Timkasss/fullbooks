import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { PostDocument } from '../schemas/post.schema'

interface IMongoDB {
	save(data: string): void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MongoDB implements IMongoDB {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	save(data: string): void {}
}

@Injectable()
export class PostsService {
	constructor(@InjectModel('Posts') private PostsModel: Model<PostDocument>) {}

	async createPost() {
		try {
		} catch (e) {
			throw e
		}
	}

	async getPosts() {}

	async getPost() {}

	async deletePost() {}

	async getPostsByAuthor() {}

	async getPostsByTag() {}

	async getPostsByCategory() {}
}
