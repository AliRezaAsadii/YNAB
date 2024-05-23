"use strict";

//* packages

const mongoose = require("mongoose");

//* schema
//! not finished on developing...

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "user most have firstname"],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, "user most have lastname"],
    trim: true,
  },
  wallet: [String],
});

//* exports

module.exports = userSchema;
