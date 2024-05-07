const express = require("express");
const router = express.Router();

const users = [];

router.get("/new", (_req, res) => {
  res.render("users/new", { defaultFistName: "Lexa" });
});

router.post("/", (req, res) => {
  const fistName = req.body.fistName; // Access the value of the input with the name "fistName", by using the urlencoded middleware in server.js
  if (!fistName || fistName.length < 3) {
    res.status(500).render("users/new", { defaultFistName: fistName }); // Redirect to the form page if the input is invalid
  } else {
    users.push(fistName);
    res.redirect(`users/${users.length - 1}`); // Redirect to the new route if the input is valid
  }
});

router.get("/:id", (req, res) => {
  res.send("Hi, " + users[req.params.id]);
});

module.exports = router;
