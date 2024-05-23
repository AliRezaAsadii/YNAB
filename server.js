"use strict";

//* packages

const mongoose = require("mongoose");
const dotenv = require("dotenv");

//* imports

const app = require("./app");

//* create server

const port = 3000
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})
