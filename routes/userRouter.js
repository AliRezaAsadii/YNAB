"use strict";

//* packages

const express = require("express");

//* imports

const userController = require(".././controllers/userController");

//* router
//! on developing...

const router = express.Router();

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);


//* exports

module.exports = router