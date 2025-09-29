// Views
const loginView = (_, res) => {
  res.render("../views/auth/login");
};
const signUpView = (_, res) => {
  res.render("../views/auth/signup");
};

// Api requests
const login = (req, res) => {
  res.render("auth/login");
};

module.exports = { login, loginView, signUpView };
