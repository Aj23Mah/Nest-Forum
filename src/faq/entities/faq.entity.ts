import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { FaqCategory } from "src/faq-category/entities/faq-category.entity";
import { Category } from './../../category/entities/category.entity';
import { Type } from "class-transformer";

@Schema({
    timestamps: true,
    toJSON: {virtuals:true},
    toObject: {virtuals:true},
})

export class Faq extends Document {
    @Prop({
        unique: true,
    })
    question: string;

    @Prop()
    answer: string;

    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref:FaqCategory.name,
    })

    @Type(() => FaqCategory)
    Category: FaqCategory;
}

export type FaqType = Faq & Document;
export const FaqSchema = SchemaFactory.createForClass(Faq)