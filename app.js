"use strict";

//* packages

const express = require("express");
const morgan = require("morgan")

//* middleware

const app = express();

app.use(express.json());

app.use(morgan("dev"))

//* exports

module.exports = app;
