"use strict";

//* packages

const mongoose = require("mongoose");

//* imports

const generateAddress = require("./../idk/generateAddress");

//* codes

const walletSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "a wallet must have name"],
    minlength: [5, "The minimum length for the name is 5 characters"],
    maxlength: [12, "The maximum length for the name is 12 characters"],
  },
  address: {
    type: String,
    unique: true,
    default: Math.floor(Math.random() *1000),
    select: false,
  },
  value: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

//* exports

exports.walletSchema = walletSchema;
