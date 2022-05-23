import Joi from "joi";

export const title = Joi.string().min(6).max(50).messages({
  "string.base": "Todo title must be a string",
  "string.min": "Todo title must be atleast 6 characters long",
  "string.max": "Todo title must be atmost 50 characters long",
  "string.empty": "Todo title must not be empty",
  "any.required": "Todo title is required",
});
export const description = Joi.string().min(10).max(200).messages({
  "string.base": "Todo description must be a string",
  "string.min": "Todo description must be atleast 10 characters long",
  "string.max": "Todo description must be atmost 200 characters long",
  "string.empty": "Todo description must not be empty",
  "any.required": "Todo description is required",
});

export const date = Joi.date().iso().messages({
  "date.format": "Deadline date format should be ISO Format",
  "any.required": "Deadline date is required",
});

export const done = Joi.boolean().messages({
  "boolean.base": "Done field must be boolean (True or False)",
  "any.required": "Done field is required",
});
