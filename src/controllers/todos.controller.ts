import axios from "axios";
import { Request, Response } from "express";
import ITodo from "../entities/todo.entity";
import * as todoService from "../services/todo.service";
import {
  todoUpdateValidator,
  todoCreateValidator,
} from "../validators/todos.validator";

export const createTodo = async (req: Request, res: Response) => {
  const { error, value } = todoCreateValidator.validate(req.body, {
    abortEarly: false,
  });

  if (error)
    return res
      .status(400)
      .json({ message: "Invalid user input", errors: error.details });

  const todo = await todoService.createTodo(value);
  return res.redirect("/create-todo");
};

export const getAllTodos = async (req: Request, res: Response) => {
  const { done, upcoming } = req.query;
  const todos = await todoService.getAllTodos({ done, upcoming });
  return res.status(200).json(todos);
};

export const getTodo = async (req: Request, res: Response) => {
  const todo = await todoService.getTodo(req.params.id);
  return res.status(200).json(todo);
};

export const updateTodo = async (req: Request, res: Response) => {
  console.log("UPDATE: ", req.params.id, req.body);
  const { error, value } = todoUpdateValidator.validate(req.body, {
    abortEarly: false,
  });

  if (error)
    return res
      .status(400)
      .json({ message: "Invalid user input", errors: error.details });

  const updatedTodo = await todoService.updateTodo(
    req.params.id,
    value as ITodo
  );
  if (!updatedTodo)
    return res
      .status(400)
      .json({ message: "Couldn't update the todo activity" });
  return res.redirect("/");
};

export const deleteTodo = async (req: Request, res: Response) => {
  const isDeleted = await todoService.deleteTodo(req.params.id);
  if (!isDeleted)
    return res
      .status(400)
      .json({ message: "Couldn't delete the todo activity" });
  return res.status(200).json({ message: "Todo deleted successfully" });
};

export const listTodoPage = async (req: Request, res: Response) => {
  let { done, upcoming } = req.query;

  axios(`http://localhost:8080/todos`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    params: { done, upcoming },
  })
    .then((data) => res.render("index", { todos: data.data }))
    .catch((err) => res.send(err));
};

export const createTodoPage = async (req: Request, res: Response) => {
  res.render("create-todo");
};

export const updateTodoPage = async (req: Request, res: Response) => {
  axios(`http://localhost:8080/todo/${req.query.id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => {
      return res.render("update-todo", { todo: data.data });
    })
    .catch((err) => res.send(err));
};
