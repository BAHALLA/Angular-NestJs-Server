import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getAllPosts() {
    return this.postsService.getAll();
  }
  @Get(':userId')
  getPostByUserId(id: number) {
    const post = this.postsService.getPostByUserId(+id);
    if (!post) {
       throw new  HttpException('Pas Found', HttpStatus.NOT_FOUND);
    }
    return post;
  }

}
