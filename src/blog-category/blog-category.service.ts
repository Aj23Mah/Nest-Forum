import { Injectable } from '@nestjs/common';
import { CreateBlogCategoryDto } from './dto/create-blog-category.dto';
import { UpdateBlogCategoryDto } from './dto/update-blog-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BlogCategory, BlogCategoryType } from './entities/blog-category.entity';
import { Model } from 'mongoose';

@Injectable()
export class BlogCategoryService {

  constructor(
    @InjectModel(BlogCategory.name)
    private readonly BlogCategoryModel: Model<BlogCategoryType>,
  ) {}
  create(createBlogCategoryDto: CreateBlogCategoryDto) {
    return this.BlogCategoryModel.create({
      ...CreateBlogCategoryDto,
    });
  }

  findAll() {
    return this.BlogCategoryModel.find({});
  }

  findOne(id: string) {
    return this.BlogCategoryModel.findById(id);
  }

  update(id: string, updateBlogCategoryDto: UpdateBlogCategoryDto) {
    return this.BlogCategoryModel.findByIdAndUpdate(id, {
      ...UpdateBlogCategoryDto,
    });
  }

  remove(id: string) {
    return this.BlogCategoryModel.deleteOne({_id: id});
  }
}
