const express = require("express");
const router = express.Router();

router.post("/new", (_req, res) => {
  res.send(`Create, user!`);
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get, user ${req.params.id}!`);
  })
  .put((req, res) => {
    res.send(`Edit, user ${req.params.id}!`);
  })
  .delete((req, res) => {
    res.send(`Delete, user ${req.params.id}!`);
  });

module.exports = router;
