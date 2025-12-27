const express = require("express");
const router = express.Router();
const User = require("../models/UsersModel");
const authMiddleware = require("../middleware/auth");

router.get("/search", authMiddleware, async (req, res) => {
  const { q } = req.query;

  const user = await User.findOne({
    $or: [
      { username: q },
      { email: q },
    ],
  }).select("_id name username email");

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

module.exports = router;
