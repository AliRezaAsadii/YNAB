"use strict";

//* packages

const mongoose = require("mongoose");
const dotenv = require("dotenv");

//* imports

const app = require("./app");

//* connect config.env

dotenv.config({ path: './config.env' })

//* connect database

const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db, {
    // useNewUrlParser: true,
  })
  .then(() => console.log("db connections successful!"));

//* create server

const port = 3000
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})
