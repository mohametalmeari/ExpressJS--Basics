const express = require("express");
const router = express.Router();

router.post("/new", (_req, res) => {
  res.send(`Create, user!`);
});

router.route("/:id").get((req, res) => {
  res.json(req.user); //4. Send the user object that was added to the request objects
});

const user = [{ name: "Tina" }, { name: "Tom" }, { name: "Trevor" }];
router.param("id", (req, res, next, id) => {
  req.user = user[id]; //1. Add the user object to the request object
  if (!req.user) {
    return res.status(404).send("User not found"); //2. Send an error response if the user is not found
  }
  next(); //3. Pass control to the next handler if the user is found
});

module.exports = router;
