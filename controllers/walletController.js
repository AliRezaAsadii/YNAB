"use strict";

const Wallet = require("./../models/walletModel");

exports.getAllWallet = async (req, res) => {
  try {
    const wallets = await Wallet.find();

    res.status(200).json({
      status: "success",
      data: wallets,
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.getWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: wallet,
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.createWallet = async (req, res) => {
  console.log(req.body);

  const newWallet = await Wallet.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: {
        wallet: newWallet,
      },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateWallet = async (req, res) => {
  try {
    const wallet = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      requestAt: req.requestTime,
      data: {
        wallet,
      },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteWallet = async (req, res) => {
  try {
    await Wallet.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      requestAt: req.requestTime,
      massage: "successful",
    });
  } catch {
    res.status(400).send(err);
  }
};
