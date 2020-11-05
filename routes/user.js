const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");

//passport - initialize
const initializePassport = require("../config/passport");
const pool = require("../config/config");
initializePassport(passport);

router.get("/profile", (req, res) => {
  console.log(user);
  res.render("user/profile", {
    layout: "main",
  });
});

router.get("/signup", (req, res) => {
  res.render("user/signup", {
    layout: "main",
  });
});

router.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const name = req.body.email;
    const user = await pool.query(
      "INSERT INTO vine_user (us_name, us_password) VALUES ($1, $2)",
      [name, hashedPassword]
    );

    res.render("user/signin", {
      layout: "main",
    });
  } catch (error) {
    console.error(error);
    res.render("user/signup", {
      layout: "main",
    });
  }
});

router.get("/signin", (req, res) => {
  res.render("user/signin", {
    layout: "main",
  });
});

router.post(
  "/signin",
  passport.authenticate("local", {
    successRedirect: "/list",
    failureRedirect: "/user/signin",
    failureFlash: true,
  })
);

router.get("/logout", (req, res, next) => {
  req.logOut();
  res.redirect("/");
});

module.exports = router;
