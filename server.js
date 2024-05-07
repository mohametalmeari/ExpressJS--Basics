console.log("Server is running...");

const express = require("express");
const app = express();

app.get("/", (_req, res, _next) => {
  console.log("GET request received!");
  res.send("Hello World!");
});

app.listen(3000);
