const User = require("../models/Users");
const CustomError = require("../errors");
const { attachCookiesToResponse, createTokenUser } = require("../utils");
const { StatusCodes } = require("http-status-codes");

const getAllOrders = async (req, res) => {
  res.send("get all orders");
};

const getSingleOrder = async (req, res) => {
  res.send("get single orders");
};

const getCurrentUserOrders = async (req, res) => {
  res.send("get current user orders");
};

const createOrder = async (req, res) => {
  res.send("create order");
};

const updateOrder = async (req, res) => {
  res.send("update order");
};

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
};
