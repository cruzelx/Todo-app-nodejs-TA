import { Document } from "mongoose";

export default interface ITodo extends Document {
  id?: string;
  title: string;
  description: string;
  date: Date;
  done: boolean;
}
