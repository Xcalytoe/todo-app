const express = require("express");
const {
  todoPageRoute,
  authPageRoute,
  authApiRoute,
  todoApiRoute,
} = require("./src/routes");
const path = require("path");
const app = express();
const { PORT, VERSION } = require("./src/config");

require("dotenv").config();
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Static assets
app.use(express.static(path.join(__dirname, "src/public")));

// ---- Page Routes (EJS Views) ----
app.use("/", authPageRoute);
// app.use("/", todoPageRoute);

// ---- API Routes ----
app.use(`/${VERSION}/auth`, authApiRoute);
app.use("/", todoApiRoute);

app.use((err, _, res, next) => {
  // Default fallback
  res.status(500).json({
    success: false,
    message: err?.message || "Opps! Something went wrong",
  });
});

app.listen(PORT, () => console.log(`Server has started in port ${PORT}`));
