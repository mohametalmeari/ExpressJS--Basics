console.log("Server is running...");

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (_req, res) => {
  res.send("Hello, Express!");
});

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(3000);
