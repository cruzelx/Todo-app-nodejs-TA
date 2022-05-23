import Joi from "joi";
import { title, description, date, done } from "./validationFields";

export const todoCreateValidator = Joi.object({
  title: title.required(),
  description: description.required(),
  date: date.required(),
  done,
});

export const todoUpdateValidator = Joi.object({
  title,
  description,
  date,
  done,
});
