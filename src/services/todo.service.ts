import ITodo from "../entities/todo.entity";
import Todo from "../models/todos.model";

export const createTodo = async (newTodo: ITodo): Promise<ITodo> => {
  return await Todo.create(newTodo);
};

export const getTodo = async (id: string): Promise<ITodo | null> => {
  return await Todo.findById(id);
};

export const getAllTodos = async (filter: {
  done: any;
  upcoming: any;
}): Promise<ITodo[]> => {
  const { done, upcoming } = filter;
  console.log(filter);
  if (done) return await Todo.find({ done: done });
  if (upcoming) return await Todo.find({ date: { $gt: upcoming } });
  return await Todo.find();
};

export const updateTodo = async (
  id: String,
  updateTodo: ITodo
): Promise<ITodo | null> => {
  return await Todo.findByIdAndUpdate(id, updateTodo, {
    new: true,
    setDefaultsOnInsert: true,
    omitUndefined: true,
  });
};

export const deleteTodo = async (id: String): Promise<ITodo | null> => {
  return await Todo.findByIdAndDelete(id);
};
