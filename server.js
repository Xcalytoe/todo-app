const express = require("express");
const authRouter = require("./src/routes/auth");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;
require("dotenv").config();
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static("public"));

app.use("/", authRouter);

app.use((err, _, res, next) => {
  // Default fallback
  res.status(500).json({
    success: false,
    message: err?.message || "Opps! Something went wrong",
  });
});

app.listen(PORT, () => console.log(`Server has started in port ${PORT}`));
