const express = require("express");
const router = express.Router();

const {
  createOrder,
  updateOrderLocation,
  getAllOrderInPoint,
  getAllOrderInPointAdmin,
  getAllOrderCreatePoint,
  getOrder,
  getAllOrder,
} = require("../controller/orderController");
const { authMiddleware,
   isPointLeader,
  isAdmin, } = require("../middleware/authMiddleware");

router.post("/", createOrder);
router.get("/all-order-in-point", authMiddleware, getAllOrderInPoint);
router.get(
  "/all-order-create-point",
  authMiddleware,
  isPointLeader,
  getAllOrderCreatePoint
);
router.get(
  "/all-order-in-point-admin/:id",
  authMiddleware,
  isAdmin,
  getAllOrderInPointAdmin
);
router.put("/:id", authMiddleware, updateOrderLocation);
router.get("/:id", getOrder);
router.get("/", authMiddleware, getAllOrder);

module.exports = router;
