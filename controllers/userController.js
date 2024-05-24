"use strict";

//* imports

const User = require("./../models/userModel");

//* functions
//! not finished on developing...

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      length: users.length,
      data: { users },
    });
  } catch {
    res.status(404).json({
      status: "failed",
      err: { err },
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch {
    res.status(404).json({
      status: "failed",
      data: { err },
    });
  }
};

exports.createUser = async (req, res) => {
  const newUser = await User.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: { newUser },
    });
  } catch {
    res.status(404).json({
      status: "failed",
      data: { err },
    });
  }
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);

  try {
    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch {
    res.status(404).json({
      status: "failed",
      data: { err },
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
    });
  } catch {
    res.status(404).json({
      status: "failed",
      data: { err },
    });
  }
};
