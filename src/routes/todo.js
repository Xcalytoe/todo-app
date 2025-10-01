const todoApiRoute = require("express").Router();
const { getTodoList, addTodo } = require("../controllers/todoControllers");

todoApiRoute.get(
  "/",
  (req, _, next) => {
    req.renderView = "todo/list"; // Set the view to be rendered in case of error
    next();
  },
  getTodoList
);
todoApiRoute.post(
  "/",
  (req, _, next) => {
    req.renderView = "todo/list"; // Set the view to be rendered in case of error
    next();
  },
  addTodo
);

module.exports = todoApiRoute;
