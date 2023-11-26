import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class User extends Document {
  @Prop()
  firstName: string;

  @Prop({
    type: 'string',
  })
  lastName: string;

  @Prop({
    type: 'string',
    unique: true,
  })
  email: string;

  @Prop({
    type: 'string',
  })
  @Exclude()
  password: string;

  @Prop({
    type: 'string',
    descrition: '0:deleted, 1:active',
    default: 0,
  })
  status: number;
}
export type UserType = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
