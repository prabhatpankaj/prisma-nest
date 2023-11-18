import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostDto } from './dtos/post.dto';



@Injectable()
export class PostService {
    constructor(private readonly prismaService: PrismaService) {
    }

    async createPost(postDto: PostDto) {
        return this.prismaService.post.create({
            data: {
                title: postDto.title,
                content: postDto.content,
                authorId: +postDto.authorId

            }
        })
    }
}