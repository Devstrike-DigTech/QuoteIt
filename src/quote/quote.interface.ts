import { Document, ObjectId } from 'mongoose';
import { IUser } from '../User/interfaces/user.interface';
export interface IQuote extends Document {
  id: ObjectId;
  author: string;
  ratings: number;
  likes: number;
  text: string;
  created_at: Date;
  updated_at: Date;
  uploader: ObjectId | IUser;
  language: string;
}
