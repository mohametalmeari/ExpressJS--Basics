console.log("Server is running...");

const express = require("express");
const app = express();

const logger = (req, _res, next) => {
  console.log(req.originalUrl);
  next();
};
app.use(logger); // Add logger middleware, which runs before any request defined below this line

app.get("/", (_req, res) => {
  res.send("Hello, Express!");
});

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(3000);
