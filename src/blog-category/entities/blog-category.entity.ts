import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class BlogCategory extends Document {
  @Prop()
  label: string;

  @Prop({
    type: 'string',
  })
  content: string;

  @Prop({
    type: 'string',
    descrition: '0:deleted, 1:active',
    default: 0,
  })
  status: number;
}

export type BlogCategoryType = BlogCategory & Document;
export const BlogCategorySchema = SchemaFactory.createForClass(BlogCategory);
