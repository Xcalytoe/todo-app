const { format } = require("date-fns");
const Todo = require("../models/Todo");

// group todo list by date
const groupByDate = (todoArr) => {
  return todoArr.reduce((acc, todo) => {
    const dateKey = todo.date.toISOString().split("T")[0];
    const completedAt = {
      ...(todo?.completedAt && format(new Date(todo.completedAt), "PPpp")),
    };
    // Check if the key exists
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }

    const todoObj = todo.toJSON();

    // acc[dateKey].push({ ...todo, completedAt, date: formattedDate });
    acc[dateKey].push({ ...todoObj, ...completedAt });
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
    // console.log("formattedDate", list, todos);

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
