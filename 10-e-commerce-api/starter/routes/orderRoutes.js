const express = require("express");
const router = express.router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");

const {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
} = require("../controller/orderController");

router
  .route("/")
  .get(authenticateUser, getAllOrders)
  .post(authenticateUser, createOrder)
  .patch(authenticateUser, updateOrder);
router.route("/showAllMyOrders").get(authenticateUser, getCurrentUserOrders);

router.route("/:id").get(authenticateUser, getSingleOrder);

module.exports = router;