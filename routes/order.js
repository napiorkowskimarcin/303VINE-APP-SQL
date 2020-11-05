const express = require("express");
const pool = require("../config/config");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const DataSQL = await pool.query("SELECT * FROM vine_orders");
    const Data = DataSQL.rows;
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
