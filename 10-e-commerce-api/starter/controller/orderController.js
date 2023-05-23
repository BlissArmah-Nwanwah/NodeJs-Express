const Order = require("../models/Order");

const CustomError = require("../errors");
const { attachCookiesToResponse, createTokenUser } = require("../utils");
const { StatusCodes } = require("http-status-codes");
const Products = require("../models/Products");

const createOrder = async (req, res) => {
  const { items: cartItems, tax, shippingFee } = req.body;

  if (!cartItems || cartItems.length < 1) {
    throw new CustomError.BadRequestError("No items in cart");
  }
  if (!tax || !shippingFee) {
    throw new CustomError.BadRequestError(
      "Please provide tax and shipping fee"
    );
  }
  let orderItems = [];
  let subtotal = 0;

  for (const item of cartItems) {
    const dbProduct = await Products.findOne({ _id: item.product });
    if (!dbProduct) {
      throw new CustomError.NotFoundError(
        `No product with id: ${item.product}`
      );
    }
    const { name, price, image, _id } = dbProduct;
    const singleOrderItem = {
      amount: item.amount,
      name,
      price,
      image,
      product: _id,
    };
    // add item to order
    orderItems= [...orderItems, singleOrderItem]
    // calculate subtotal
    subtotal += item.amount * price;
  }

  console.log(orderItems);
  console.log(subtotal);
  res.send("createOrder");
};
const getAllOrders = async (req, res) => {
  res.send("get all orders");
};

const getSingleOrder = async (req, res) => {
  res.send("get single orders");
};

const getCurrentUserOrders = async (req, res) => {
  res.send("get current user orders");
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
