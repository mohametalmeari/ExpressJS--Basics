const express = require("express");
const router = express.Router();

router.post("/new", (_req, res) => {
  res.send(`Create, user!`);
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get, user ${req.params.id}!`); //2. Send a response after next() is called
  })
  .put((req, res) => {
    res.send(`Edit, user ${req.params.id}!`); //2. Send a response after next() is called
  })
  .delete((req, res) => {
    res.send(`Delete, user ${req.params.id}!`); //2. Send a response after next() is called
  });

router.param("id", (_req, _res, next, id) => { // Middleware function, called when the :id parameter is present in the URL
  console.log(`User ID is ${id}`);
  next(); //1. Pass control to the next handler
});

module.exports = router;
