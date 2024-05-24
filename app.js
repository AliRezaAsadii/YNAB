"use strict";

//* packages

const express = require("express");
const morgan = require("morgan")

//* imports

const userRouter = require('./routes/userRouter')

//* middleware

const app = express();

app.use(express.json());

app.use(morgan("dev"))

app.use('/users' , userRouter)

//* exports

module.exports = app;
