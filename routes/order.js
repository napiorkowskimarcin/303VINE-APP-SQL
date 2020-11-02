const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Vine = require("../models/Vine");
const Cart = require("../models/cart");

router.get("/", async (req, res) => {
  try {
    const Data = await Cart.find().lean();
    console.log(Data);
    res.render("order", {
      layout: "main",
      Data,
    });
  } catch (error) {
    return console.log(error);
  }
});

module.exports = router;
