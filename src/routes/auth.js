const authRouter = require("express").Router();
const {
  login,
  loginView,
  signUpView,
} = require("../controllers/authControllers");

authRouter.get("/login", loginView);
authRouter.get("/sign-up", signUpView);

module.exports = authRouter;
