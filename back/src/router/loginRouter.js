const express = require("express");
const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  res.send("Logged in");
});

module.exports = loginRouter;
