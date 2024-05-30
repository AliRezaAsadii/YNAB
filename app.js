"use strict";

//* packages

const express = require("express");
const morgan = require("morgan")

//* imports

const userRouter = require('./routes/userRouter')
const walletRouter = require('./routes/walletRouter')

//* middleware

const app = express();

app.use(express.json());

app.use(morgan("dev"))

app.use('/users' , userRouter)
app.use('/wallet' , walletRouter)

//* exports

module.exports = app;
