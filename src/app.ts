import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import "./db";
import {
  createTodo,
  createTodoPage,
  deleteTodo,
  getAllTodos,
  getTodo,
  listTodoPage,
  updateTodo,
  updateTodoPage,
} from "./controllers/todos.controller";
import path from "path";

dotenv.config();

const app = express();
const { SERVER_HOST, SERVER_PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.get("/", listTodoPage);
app.get("/create-todo", createTodoPage);
app.get("/update-todo", updateTodoPage);

app.post("/todos", createTodo);
app.get("/todos", getAllTodos);
app.get("/todo/:id", getTodo);
app.post("/todos/update/:id", updateTodo);
app.delete("/todos/:id", deleteTodo);

app.listen(SERVER_PORT, (): void => {
  console.log(`Listening on http://${SERVER_HOST}:${SERVER_PORT}`);
});
