import { Body, Controller } from '@nestjs/common'
import { PostsService } from './posts.service'
import { CreatePostDto } from './create-post.dto'

@Controller('posts')
export class PostsController {
	constructor(private PostService: PostsService) {}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async createPost(@Body() createPostDto: CreatePostDto) {
		try {
			// pass
		} catch (error) {
			console.error(error)
			throw error
		}
	}

	async getPosts() {}

	async getPost() {}

	async deletePost() {}

	async getPostsByAuthor() {}

	async getPostsByTag() {}

	async getPostsByCategory() {}
}
