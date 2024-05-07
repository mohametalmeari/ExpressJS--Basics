console.log("Server is running...");

const express = require("express");
const app = express();

const logger = (req, _res, next) => {
  console.log(req.originalUrl);
  next();
};

const logger2 = (_req, _res, next) => {
  console.log("Second logger");
  next();
};

// Add logger middleware that only run for the "/" route, more middlewares can be added to the same route separated by commas.
app.get("/", logger, logger2, (_req, res) => {
  res.send("Hello, Express!");
});

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(3000);
