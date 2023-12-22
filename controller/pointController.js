const Point = require("../models/pointModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbid");

const createPoint = asyncHandler(async (req, res) => {
  try {
    const newPoint = await Point.create(req.body);
    res.json(newPoint);
  } catch (error) {
    throw new Error(error);
  }
});

const getPoint = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getPoint = await Point.findById(id);
    res.json(getPoint);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllPoint = asyncHandler(async (req, res) => {
  try {
    const getAllPoint = await Point.find();
    res.json(getAllPoint);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createPoint,
  getPoint,
  getAllPoint,
};
