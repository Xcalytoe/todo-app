const { format } = require("date-fns");
const Todo = require("../models/Todo");

// group todo list by date
const groupByDate = (todoArr) => {
  return todoArr.reduce((acc, todo) => {
    const date = todo.date;
    const completedAt = format(new Date(todo.completedAt), "PPpp");
    const formattedDate = format(new Date(todo.date), "dd-MM-yyyy");

    // Check if the key exists
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push({ ...todo, completedAt, date: formattedDate });
    return acc;
  }, {});
};

const getTodoList = async (req, res, next) => {
  try {
    const todos = await Todo.find({ userId: req.user._id }).sort({ date: -1 });

    const list = groupByDate(todos);
    res.render("todo/list", { todoList: list });
  } catch (error) {
    next(error);
  }
};

const addTodo = async (req, res, next) => {
  try {
    const { title, date } = req.body;
    const me = await Todo.create({ title, date, userId: req.user._id });
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTodoList,
  addTodo,
};
