const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.query.name; // get the name query parameter from the url (e.g. /users?name=John)
  res.send(`Hello, ${name}!`);
});

module.exports = router;
