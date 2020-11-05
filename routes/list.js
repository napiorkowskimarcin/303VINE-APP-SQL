const express = require("express");
const pool = require("../config/config");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const DataSQL = await pool.query("SELECT * FROM product");
    const Data = DataSQL.rows;

    // console.log(Data);
    res.render("list", {
      layout: "main",
      Data,
    });
  } catch (error) {
    return console.log(error);
  }
});

router.post("/buy", async (req, res) => {
  const order = req.body;
  await pool.query(
    "INSERT INTO vine_orders (inputemail, inputnames,inputqty,inputsum) VALUES ($1,$2,$3,$4)",
    [order.inputEmail, order.inputNames, order.inputQty, order.inputSum]
  );
  res.render("succes", {
    layout: "main",
    message: "You have placed an order",
  });
});

module.exports = router;
