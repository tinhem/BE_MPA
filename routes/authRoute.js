const express = require("express");
const router = express.Router();

const {
  registerUser,
  registerLeader,
  loginUserController,
  loginAdminController,
  loginGatheringPointLeaderController,
  loginHeadOfTransactionPointController,
  logout,
  updateUser,
  updateUserStatus,
  getAllUsers,
  getAllLeader,
} = require("../controller/userController");
const {
  authMiddleware,
  isPointLeader,
  isAdmin,
} = require("../middleware/authMiddleware");

router.post("/register/:id", registerUser);
router.post("/register-leader/:id", authMiddleware, isAdmin, registerLeader);
router.post("/login", loginUserController);
router.post("/admin", loginAdminController);
router.post("/gathering-point-leader", loginGatheringPointLeaderController);
router.post(
  "/head-of-transaction-point",
  loginHeadOfTransactionPointController
);
router.post("/edit-state/:id", authMiddleware, isPointLeader, updateUserStatus);

router.get("/logout", logout);
router.get("/all-users", authMiddleware,    getAllUsers);
router.get("/all-leader", authMiddleware, isAdmin, getAllLeader);

router.put("/edit-user", authMiddleware, updateUser);

module.exports = router;
