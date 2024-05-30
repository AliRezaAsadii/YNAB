"use strict"

//* packages

const mongoose = require('mongoose')

//* imports

const schema = require('.././schemas/walletSchema')

//* create User

const Wallet = mongoose.model("Wallet" , schema)

//* exports

module.exports = Wallet