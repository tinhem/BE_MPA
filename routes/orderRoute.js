const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrder,
  getAllOrder,
} = require("../controller/orderController");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, createOrder);
router.get("/:id", getOrder);
router.get("/", authMiddleware, getAllOrder);

module.exports = router;
