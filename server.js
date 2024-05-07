console.log("Server is running...");

const express = require("express");
const app = express();

// app.use(express.json()); // Parse JSON bodies (as sent by API clients)

app.use(express.urlencoded({ extended: true })); // Parse JSON bodies (as sent by HTML forms)

app.set("view engine", "ejs"); // Set the view engine to ejs

app.get("/", (_req, res) => {
  res.send("Hello, Express!");
});

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(3000);
