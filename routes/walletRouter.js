"use strict";

const express = require("express");
const router = express.Router();

const walletController = require("./../controllers/walletController");

router
  .route("/")
  .post(walletController.createWallet);

router
  .route("/:id")
  .get(walletController.getWallet)
  .patch(walletController.updateWallet)
  .delete(walletController.deleteWallet);


module.exports = router;