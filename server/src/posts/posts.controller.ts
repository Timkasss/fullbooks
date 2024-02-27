import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	Query,
	Req
} from '@nestjs/common'
import { PostsService } from './posts.service'
import { CreatePostDto } from './create-post.dto'
import { FormDataRequest, MemoryStoredFile } from 'nestjs-form-data'
import { Request } from 'express'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
	constructor(private PostService: PostsService) {}

	// example of using Roles Guard
	// @UseGuards(RoleGuard)
	// @Roles(Role.USER)
	@FormDataRequest({ storage: MemoryStoredFile })
	@Post('create')
	async createPost(@Body() createPostDto: CreatePostDto, @Req() req: Request) {
		try {
			const post = this.PostService.createPost(createPostDto, req)
			return post
		} catch (error) {
			console.error(error)
			throw error
		}
	}
	@Get()
	async getPosts() {
		return await this.PostService.getPosts()
	}

	@Get('post/:id')
	async getPost(@Param('id') id: string) {
		return await this.PostService.getPost(id)
	}

	@Delete('/:id')
	async deletePost(@Param('id') id: string) {
		return await this.PostService.deletePost(id)
	}

	@Get('author')
	async getPostsByAuthor(@Query('authorId') authorId: string) {
		return await this.PostService.getPostsByAuthor(authorId)
	}

	@Get('tag')
	async getPostsByTag(@Query('tags') tags: string[]) {
		return await this.PostService.getPostsByTag(tags)
	}

	@Get('category')
	async getPostsByCategory(@Query('category') category: string) {
		return this.PostService.getPostsByCategory(category)
	}

	@Post('givelike/:id')
	async giveLike(@Param('id') id: string) {
		return this.PostService.giveLike(id)
	}

	@Post('givedislike/:id')
	async giveDisLike(@Param('id') id: string) {
		return this.PostService.giveDislike(id)
	}

	@Post('removelike/:id')
	async removeLike(@Param('id') id: string) {
		return this.PostService.removeLike(id)
	}

	@Post('removedislike/:id')
	async removeDislike(@Param('id') id: string) {
		return this.PostService.removeDislike(id)
	}
}
