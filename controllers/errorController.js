"use strict";
const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (req, res) => {
  res.render("error");
};

exports.internalServerError = (error, req, res, next) => {
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our application is taking a nap!`);
};
