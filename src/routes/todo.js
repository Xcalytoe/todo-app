const todoApiRoute = require("express").Router();
const { getTodoList, getTodoItems } = require("../controllers/todoControllers");

todoApiRoute.get("/", getTodoList);

module.exports = todoApiRoute;
