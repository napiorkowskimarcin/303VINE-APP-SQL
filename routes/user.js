const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.render("user/signup", {
      layout: "main",
      csrfToken: req.csrfToken(),
    });
  } catch (error) {
    return console.log(error);
  }
});

router.post("/", (req, res) => {
  try {
    res.redirect("/list");
  } catch (error) {
    return console.log(error);
  }
});

module.exports = router;
