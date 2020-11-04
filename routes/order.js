const express = require("express");
const router = express.Router();

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
