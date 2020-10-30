const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Vine = require("../models/Vine");
const Cart = require("../models/cart");

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

router.get("/add/:id", (req, res) => {
  const productId = req.params.id;
  let items;
  const cart = new Cart(req.session.cart ? req.session.cart : { items: {} });
  Vine.findById(productId, function (err, product) {
    if (err) {
      return res.redirect("/list");
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect("/list");
  });
});

module.exports = router;
