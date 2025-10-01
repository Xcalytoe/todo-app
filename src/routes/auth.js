const authRoute = require("express").Router();
const passport = require("passport");
const { login, createUser } = require("../controllers/authControllers");

// Page Routes
authRoute.get("/login", (_, res) => {
  res.render("auth/login", { message: "", hasError: false });
});
authRoute.get("/sign-up", (_, res) => {
  res.render("auth/signup", { message: "", hasError: false });
});

// API Routes
authRoute.post(
  "/sign-up",
  (req, _, next) => {
    req.renderView = "auth/signup"; // Set the view to be rendered in case of error
    next();
  },
  createUser
);
authRoute.post(
  "/login",
  (req, _, next) => {
    req.renderView = "auth/login"; // Set the view to be rendered in case of error
    next();
  },
  login
);

module.exports = authRoute;
