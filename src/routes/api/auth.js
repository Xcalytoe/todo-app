const authApiRoute = require("express").Router();
const { login } = require("../../controllers/authControllers");

authApiRoute.get("/login", login);

module.exports = authApiRoute;
