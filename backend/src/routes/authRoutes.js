const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  me,
  logout,
} = require("../controllers/authControllers");

const authMiddleware = require("../middleware/auth");

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", authMiddleware, me);
router.post("/logout", authMiddleware, logout);

module.exports = router;
