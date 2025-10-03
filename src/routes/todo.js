const todoApiRoute = require("express").Router();
const {
  getTodoList,
  addTodo,
  updateTodo,
} = require("../controllers/todoControllers");

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
todoApiRoute.get(
  "/:id",
  (req, _, next) => {
    req.renderView = "todo/list"; // Set the view to be rendered in case of error
    next();
  },
  updateTodo
);

module.exports = todoApiRoute;
