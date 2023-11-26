import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Blog extends Document {
  @Prop()
  title: string;

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

export type BlogType = Blog & Document;
export const BlogSchema = SchemaFactory.createForClass(Blog);
