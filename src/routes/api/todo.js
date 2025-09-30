const todoApiRoute = require("express").Router();
const { getTodoList } = require("../../controllers/todoControllers");

todoApiRoute.get("/", getTodoList);

module.exports = todoApiRoute;
