const express = require("express");
const router = express.Router();
const usersController = require("../controller/users");
const { protect } = require("../middleware/auth");

router
  .post("/register", usersController.registerUser)
  .post("/login", usersController.loginUser)
  .get("/profile", protect, usersController.profile)
  .get("/profile/:id", usersController.getDetailProfile)
  .post("/refreshToken", usersController.refreshToken);

module.exports = router;
