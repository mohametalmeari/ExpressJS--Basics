const express = require("express");
const router = express.Router();

const users = [{ name: "John" }, { name: "Jane" }, { name: "Jim" }];
router.route("/").get((_req, res) => {
  res.json(users);
});

router.route("/:id").get((req, res) => {
  if (!users[req.params.id]) {
    res.status(404).json({ message: "User not found" });
  }
  res.json(users[req.params.id]);
});

module.exports = router;
