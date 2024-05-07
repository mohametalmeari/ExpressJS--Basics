console.log("Server is running...");

const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  // res.send("Hello World!"); // Send plain text response
  // res.sendStatus(500); // Send status with default message
  // res.status(500).json({ error: "Internal Error" }); // Send status with custom message
  // res.download("./server.js"); // Download file
  res.json({ message: "Hello World" }); // Send JSON response with default success status 200
});

app.listen(3000);
