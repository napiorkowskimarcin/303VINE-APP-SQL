const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.render("index", {
      layout: "main",
    });
  } catch (error) {
    return console.log(error);
  }
});

router.post("/", (req, res) => {
  const data = req.body;
  new Vine(data).save();
  res.render("succes", {
    layout: "main",
    message: "You added a new product",
    data,
  });
});

module.exports = router;
