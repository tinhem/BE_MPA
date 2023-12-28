const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrder,
  getAllOrder,
} = require("../controller/orderController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/", createOrder);
router.get("/:id", getOrder);
router.get("/", authMiddleware, getAllOrder);

module.exports = router;
