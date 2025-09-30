const authPageRoute = require("express").Router();

authPageRoute.get("/login", (_, res) => {
  res.render("auth/login");
});
authPageRoute.get("/sign-up", (_, res) => {
  res.render("auth/signup");
});

module.exports = authPageRoute;
