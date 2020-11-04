const express = require("express");
const pool = require("../config/config");
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

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newProduct = await pool.query(
      "INSERT INTO product (vineName, vinePrice, vineType,vineCountry,vineRate) VALUES ($1, $2, $3, $4,$5)",
      [
        data.vineName,
        data.vinePrice,
        data.vineType,
        data.vineCountry,
        data.vineRate,
      ]
    );
    res.render("succes", {
      layout: "main",
      message: "You added a new product",
      data,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
