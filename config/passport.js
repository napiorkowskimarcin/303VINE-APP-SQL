const { authenticate } = require("passport");
const passport = require("passport");
const bcrypt = require("bcrypt");
const pool = require("./config");
const LocalStrategy = require("passport-local").Strategy;

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    const SQLuser = await pool.query(
      "SELECT us_name, us_id, us_password FROM vine_user WHERE us_name = $1",
      [email]
    );
    const user = SQLuser.rows[0];

    // console.log(user);
    // console.log("user:");
    // console.log(user.us_name);
    // console.log("password:");
    // console.log(user.us_password);
    if (!user) {
      return done(null, false, {
        message: "no user with that name- please create an accout",
      });
    }
    try {
      if (await bcrypt.compare(password, user.us_password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "password incorrect" });
      }
    } catch (error) {
      return done(error);
    }
  };
  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.us_id));
  passport.deserializeUser((us_id, done) =>
    pool
      .query("SELECT us_id, us_name FROM vine_user WHERE us_id = $1", [us_id])
      .then((user) => done(null, user))
  );
}

module.exports = initialize;
