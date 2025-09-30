const express = require("express");
require("dotenv").config();
const passport = require("passport");
const { authRoute, todoRoute } = require("./src/routes");
const path = require("path");
const connectDb = require("./src/config/db");
const app = express();
const { PORT } = require("./src/config");

app.use(express.json());
// Parse form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Connect DB
connectDb();

// passport-jwt middleware
require("./src/middleware/auth");

// Set views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Static assets
app.use(express.static(path.join(__dirname, "src/public")));

// ----  Routes ----
app.use("/", authRoute);
app.use(
  "/",
  passport.authenticate("jwt", { session: false, failureRedirect: "/login" }),
  todoRoute
);

app.use((err, _, res, next) => {
  // Default fallback
  res.status(500).json({
    success: false,
    message: err?.message || "Opps! Something went wrong",
  });
});

app.listen(PORT, () => console.log(`Server has started in port ${PORT}`));
