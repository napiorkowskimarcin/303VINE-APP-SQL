const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const Data = await Vine.find().lean();
    res.render("list", {
      layout: "main",
      Data,
    });
  } catch (error) {
    return console.log(error);
  }
});

router.post("/buy", (req, res) => {
  const order = req.body;
  new Cart(order).save();
  res.render("succes", {
    layout: "main",
    message: "You have placed an order",
  });
});

module.exports = router;
