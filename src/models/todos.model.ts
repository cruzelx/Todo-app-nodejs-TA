import { string } from "joi";
import { model, Schema } from "mongoose";
import ITodo from "../entities/todo.entity";

const todoSchema: Schema = new Schema<ITodo>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  done: { type: Boolean, default: false },
});

export default model<ITodo>("Todo", todoSchema);
