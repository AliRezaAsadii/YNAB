"use strict"

//* packages

const mongoose = require('mongoose')

//* imports

const schema = require('.././schemas/userSchema')

//* create User

const User = mongoose.model("User" , schema)

//* exports

module.exports = User