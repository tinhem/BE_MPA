const express = require("express");
const router = express.Router();

const {
  createOrder,
  updateOrderStatus,
  updatetrackinginfo,
  getOrder,
  getAllOrder,
} = require("../controller/orderController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post("/", createOrder);
router.post("/update/:id", updateOrderStatus);
router.post("/update-infor/:id", updatetrackinginfo);
router.get("/:id", getOrder);
router.get("/", authMiddleware, getAllOrder);

module.exports = router;
