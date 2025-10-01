const todoApiRoute = require("express").Router();
const { getTodoList } = require("../controllers/todoControllers");

todoApiRoute.get(
  "/",
  (req, _, next) => {
    req.renderView = "todo/list"; // Set the view to be rendered in case of error
    next();
  },
  getTodoList
);

module.exports = todoApiRoute;
