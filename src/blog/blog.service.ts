import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogType } from './entities/blog.entity';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name)
    private readonly BlogModel: Model<BlogType>,
  ) {}
  create(createBlogDto: CreateBlogDto) {
    return this.BlogModel.create({
      ...CreateBlogDto,
    });
  }

  findAll() {
    return this.BlogModel.find({});
  }

  findOne(id: string) {
    return this.BlogModel.findById(id);
  }

  update(id: string, updateBlogDto: UpdateBlogDto) {
    return this.BlogModel.findByIdAndUpdate(id, {
      ...UpdateBlogDto,
    });
  }

  remove(id: string) {
    return this.BlogModel.deleteOne({ _id: id });
  }
}
