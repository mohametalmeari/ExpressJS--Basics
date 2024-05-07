const express = require("express");
const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Hello, users!");
});

router.get("/new", (_req, res) => {
  res.send("Hello, new user!");
});

router.get("/:id", (req, res) => {
  res.send(`Hello, user ${req.params.id}!`);
});

module.exports = router;