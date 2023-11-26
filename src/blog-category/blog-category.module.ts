import { Module } from '@nestjs/common';
import { BlogCategoryService } from './blog-category.service';
import { BlogCategoryController } from './blog-category.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { BlogCategory, BlogCategorySchema } from './entities/blog-category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BlogCategory.name, schema: BlogCategorySchema }]),
  ],
  controllers: [BlogCategoryController],
  providers: [BlogCategoryService],
})
export class BlogCategoryModule {}
