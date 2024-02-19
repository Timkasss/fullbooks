import { Module } from '@nestjs/common'
import { PostsService } from './posts.service'

@Module({
	imports: [],
	exports: [],
	providers: [PostsService],
	controllers: []
})
export class PostsModule {}
