const express = require("express");
const router = express.Router();

const {
  createPoint,
  getPoint,
  getAllPoint,
} = require("../controller/pointController");


router.post("/", createPoint);
router.get("/:id", getPoint);
router.get("/", getAllPoint);

module.exports = router;
