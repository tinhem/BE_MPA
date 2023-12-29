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

// cập nhật vị trí đơn hàng
const updateOrderLocation = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  const { id } = req.params;
  validateMongoDbId(_id);
  const { orderLocation } = req.body;
  try {
    const findPoint = await Point.findOne({ _id: orderLocation });
    const updateOrder = await Order.findByIdAndUpdate(
      id,
      {
        ...req.body,
        orderLocation: findPoint.pointAddress,
      },
      {
        new: true,
      }
    );
    res.json(updateOrder);
  } catch (err) {
    throw new Error(err);
  }
});

const getAllOrderInPoint = asyncHandler(async (req, res) => {
  const { _id, postOfficeId } = req.user;
  console.log(_id, postOfficeId);
  validateMongoDbId(_id);
  try {
    console.log(_id, postOfficeId);
    const findPoint = await Point.findOne({ _id: postOfficeId });
    console.log(findPoint);
    const getAllOrderInPoint = await Order.find({
      orderLocation: findPoint.pointAddress,
    });
    res.json(getAllOrderInPoint);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllOrderInPointAdmin = asyncHandler(async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  try {
    const findPoint = await Point.findOne({ _id: id });
    console.log(findPoint);
    const getAllOrderInPoint = await Order.find({
      orderLocation: findPoint.pointAddress,
    });
    res.json(getAllOrderInPoint);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllOrderCreatePoint = asyncHandler(async (req, res) => {
  const { _id, postOfficeId } = req.user;
  console.log(_id, postOfficeId);
  validateMongoDbId(_id);
  try {
    console.log(_id, postOfficeId);
    const findPoint = await Point.findOne({ _id: postOfficeId });
    console.log(findPoint);
    const getAllOrderInPoint = await Order.find({
      originalLocation: findPoint.pointAddress,
    });
    res.json(getAllOrderInPoint);
  } catch (error) {
    throw new Error(error);
  }
});

// const updatetrackinginfo = asyncHandler(async (req, res, next) => {
//   const { _id } = req.user;
//   const { id } = req.params;
//   validateMongoDbId(_id);
//   const { orderLocation } = req.body;
//   try {
//     const findPoint = await Point.findOne({ _id: orderLocation });
//     const updateOrder = await Order.findByIdAndUpdate(
//       id,
//       {
//         ...req.body,
//         orderLocation: findPoint.pointAddress,
//       },
//       {
//         new: true,
//       }
//     );
//     res.json(updateOrder);
//   } catch (err) {
//     throw new Error(err);
//   }
// });


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
  updateOrderLocation,
  getAllOrderInPoint,
  getAllOrderInPointAdmin,
  getAllOrderCreatePoint,
  getOrder,
  getAllOrder,
};
