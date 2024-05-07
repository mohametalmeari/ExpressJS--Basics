const express = require("express");
const router = express.Router();

router.post("/new", (_req, res) => {
  res.send(`Create, user!`);
});

router.get("/:id", (req, res) => {
  res.send(`Get, user ${req.params.id}!`);
});

router.put("/:id", (req, res) => {
  res.send(`Edit, user ${req.params.id}!`);
});

router.delete("/:id", (req, res) => {
  res.send(`Delete, user ${req.params.id}!`);
});

module.exports = router;
