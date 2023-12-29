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

// cập nhật trạng thái đơn hàng
const updateOrderStatus = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  validateMongoDbId(id);
  const { orderStatus } = req.body; // có orderId và orderStatus từ req.body
  validateMongoDbId(id);

  try {
    const order = await Order.findById(id); 
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

const updatetrackinginfo = asyncHandler(async (req, res, next) => {
  const { id } = req.params; // Lấy orderId từ params
  const { trackingInfo } = req.body; // Lấy thông tin cập nhật từ body request
  validateMongoDbId(id);
  try {
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.trackingInfo.push(trackingInfo);
    console.log(order.trackingInfo);

    try {
      const updatedOrder = await order.save();
      res.status(200).json({ message: 'Tracking info added successfully', order: updatedOrder });
    } catch (error) {
      console.error(error);
      next(error);
    }
    
  } catch (error) {
    console.error(error);
    next(error);
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
  updatetrackinginfo,
  getOrder,
  getAllOrder,
};
