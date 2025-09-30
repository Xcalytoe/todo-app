const { format } = require("date-fns");
// TODO: fetch from db
const todoList = [
  {
    id: 1,
    title: "Finish backend project",
    completed: false,
    date: "2023-10-10",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: "Write documentation",
    completed: false,
    date: "2023-10-10",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: "Go to gym",
    completed: true,
    date: "2025-09-28",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    title: "Plan meal prep",
    completed: true,
    date: "2025-09-28",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    title: "Resolving deltas: 100% (1/1), completed with 1 local object.",
    completed: true,
    date: "2025-09-28",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// group todo list by date
const groupByDate = (todoArr) => {
  return todoArr.reduce((acc, todo) => {
    const date = todo.date;
    const updatedAt = format(new Date(todo.updatedAt), "PPpp");
    // Check if the key exists
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push({ ...todo, updatedAt });
    return acc;
  }, {});
};

const getTodoList = (_, res) => {
  const list = groupByDate(todoList);
  res.render("todo/list", { todoList: list });
};

module.exports = {
  getTodoList,
};
