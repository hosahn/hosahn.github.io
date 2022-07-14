const express = require("express");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const session = require("express-session");
const cors = require("cors");
const MongoDBStore = require("connect-mongodb-session")(session);
const dotenv = require("dotenv");
dotenv.config();

const store = new MongoDBStore({
  uri: process.env.SESSION_URL,
  collection: "sessions",
});
const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 100 requests per windowMs
  delayMs: 1, // disable delaying — full speed until the max limit is reached
});

app.use(helmet());
app.use(cors({ credentials: true }));
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use(
  require("express-session")({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);

module.exports = app;
