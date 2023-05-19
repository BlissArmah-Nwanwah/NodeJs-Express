const express = require("express");
const router = express.Router();

const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");

const {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
} = require("../controller/reviewController");

router
  .route("/")
  .post([authenticateUser, authorizePermissions], createReview)
  .get(getAllReviews);

router
  .route("/:id")
  .get([authenticateUser, authorizePermissions], getSingleReview)
  .patch([authenticateUser, authorizePermissions], updateReview)
  .delete([authenticateUser, authorizePermissions], deleteReview);

module.exports = router;
