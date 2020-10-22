const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Vine = require("../models/Vine");

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

module.exports = router;
