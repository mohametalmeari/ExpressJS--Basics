console.log("Server is running...");

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (_req, res) => {
  res.render("index", { text: "World" });
});

app.listen(3000);
