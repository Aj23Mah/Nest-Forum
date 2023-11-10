import { Injectable } from '@nestjs/common';
import { CreateFaqCategoryDto } from './dto/create-faq-category.dto';
import { UpdateFaqCategoryDto } from './dto/update-faq-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FaqCategory, FaqCategoryType } from './entities/faq-category.entity';
import { Model } from 'mongoose';

@Injectable()
export class FaqCategoryService {
  constructor(
    @InjectModel(FaqCategory.name)
    private readonly FaqCategoryModel: Model<FaqCategoryType>,
  ) {}
  create(createFaqCategoryDto: CreateFaqCategoryDto) {
    return this.FaqCategoryModel.create({
      ...createFaqCategoryDto,
    });
  }

  findAll() {
    return this.FaqCategoryModel.find({});
  }

  customMethod() {
    return `This action returns all custom method`;
  }

  findOne(id: string) {
    return this.FaqCategoryModel.findById(id);
  }

  update(id: string, updateFaqCategoryDto: UpdateFaqCategoryDto) {
    return this.FaqCategoryModel.findByIdAndUpdate(id, {
      ...UpdateFaqCategoryDto,
    });
  }

  remove(id: string) {
    return this.FaqCategoryModel.deleteOne({ _id: id });
  }
}
