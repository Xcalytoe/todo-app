const authRoute = require("express").Router();
const passport = require("passport");
const { login, createUser } = require("../controllers/authControllers");

// Page Routes
authRoute.get("/login", (_, res) => {
  res.render("auth/login");
});
authRoute.get("/sign-up", (_, res) => {
  res.render("auth/signup");
});

// API Routes
authRoute.post(
  "/sign-up",
  // passport.authenticate("signup", { session: false }),
  createUser
);
authRoute.post("/login", login);

module.exports = authRoute;
