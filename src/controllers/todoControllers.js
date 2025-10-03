const { format } = require("date-fns");
const Todo = require("../models/Todo");

// group todo list by date
const groupByDate = (todoArr) => {
  return todoArr.reduce((acc, todo) => {
    const dateKey = todo.date.toISOString().split("T")[0];
    const completedAt = todo?.completedAt
      ? format(new Date(todo.completedAt), "iii LLL dd yyyy hh:mm aaa")
      : null;

    // Check if the key exists
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }

    const todoObj = todo.toJSON();

    // acc[dateKey].push({ ...todo, completedAt, date: formattedDate });
    acc[dateKey].push({ ...todoObj, completedAt });
    return acc;
  }, {});
};

const getTodoList = async (req, res, next) => {
  try {
    const { title, date, completed } = req?.query || {};
    let filter = {};
    if (title) {
      filter.title = { $regex: title, $options: "i" };
    }
    if (date) {
      filter.date = date;
    }
    if (!!completed) {
      filter.completed = completed === "true";
    }

    const todos = await Todo.find({ userId: req.user._id, ...filter }).sort({
      date: 1,
    });

    const list = groupByDate(todos);
    res.render("todo/list", { todoList: list });
  } catch (error) {
    next(error);
  }
};

const addTodo = async (req, res, next) => {
  try {
    const { title, date } = req.body;
    await Todo.create({ title, date, userId: req.user._id });
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};
const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Todo.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      { completed: true, completedAt: new Date() }
    );
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTodoList,
  addTodo,
  updateTodo,
};
