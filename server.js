console.log("Server is running...");

const express = require("express");
const app = express();

app.get("/users", (_req, res) => {
  res.send("Hello, users!");
});

app.get("/users/new", (_req, res) => {
  res.send("Hello, new user!");
});

app.get("/users/:id", (req, res) => {
  res.send(`Hello, user ${req.params.id}!`);
});

app.listen(3000);
