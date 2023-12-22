const Order = require("../models/pointModel");
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
  getOrder,
  getAllOrder,
};
