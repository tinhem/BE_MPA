const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbid");

const createOrder = asyncHandler(async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.json(newOrder);
  } catch (error) {
    throw new Error(error);
  }
});


const updateOrderStatus = asyncHandler(async (req, res, next) => {
  const { orderId, orderStatus } = req.body; // có orderId và orderStatus từ req.body
  validateMongoDbId(orderId);

  try {
    const order = await Order.findById(orderId); 
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Cập nhật trạng thái đơn hàng
    order.orderStatus = orderStatus;

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (err) {
    // Xử lý lỗi và trả về phản hồi lỗi
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const getOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getOrder = await Order.findById(id);
    res.json(getOrder);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllOrder = asyncHandler(async (req, res) => {
  try {
    const getAllOrder = await Order.find();
    res.json(getAllOrder);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createOrder,
  updateOrderStatus,
  getOrder,
  getAllOrder,
};
