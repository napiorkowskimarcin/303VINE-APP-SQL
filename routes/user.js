const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");

//passport - initialize
const initializePassport = require("../config/passport");
initializePassport(passport);

router.get("/profile", (req, res) => {
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
    const user = {
      email: req.body.email,
      password: hashedPassword,
    };
    new User(user).save();
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
