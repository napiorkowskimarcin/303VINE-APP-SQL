const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const config = require("./config/config");
const bodyParser = require("body-parser");
const pool = require("./config/config");
const path = require("path");

//flash and session for passport
const flash = require("express-flash");
const session = require("express-session");

//for view engine
const Handlebars = require("handlebars");

//to be able to use put and delete later on
const methodOverride = require("method-override");

//set a port
const PORT = process.env.PORT || 3000;

const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const passport = require("passport");

//set app and public files for javascript

const app = express();
app.use(express.static(path.join(__dirname, "public")));

//method override for put and delete
app.use(methodOverride("_method"));

//session - to make passport-local possible
app.use(
  session({
    secret: "sessionsecret",
    resave: false,
    saveUninitialized: false,
  })
);

//allow bodyParser to recognize a body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//load handlebars and set .handlebars to .hbs + helpers
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: ".hbs",
  handlebars: allowInsecurePrototypeAccess(Handlebars),
  //create helper
  helpers: {},
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//login data
app.use(morgan("dev"));

//passport! set resave and saveuninitialized to false. secret should have been placed in seperate file
app.use(flash());
app.use(session({ secret: "asasa", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

//to have acces to account on all of the views.
app.use((req, res, next) => {
  res.locals.login = req.isAuthenticated();
  res.locals.user = req.user;
  res.locals.session = req.session;
  next();
});

//routes
app.use("/order", require("./routes/order"));
app.use("/list", require("./routes/list"));
app.use("/user", require("./routes/user"));
app.use("/", require("./routes/index"));

//start listening
app.listen(PORT, () => console.log(`Server has started on: ${PORT}`));
