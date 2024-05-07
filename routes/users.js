const express = require("express");
const router = express.Router();

router.get("/new", (_req, res) => {
  res.render("users/new", { placeHolder: "First name" });
});

router.get("/", (req, res) => {
  const firstName = req.query.firstName;
  res.send(`Hello, ${firstName}!`);
});

module.exports = router;
