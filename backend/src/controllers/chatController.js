const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
  getChats,
  accessChat,
} = require("../controllers/chatController");

// Get all chats
router.get("/", authMiddleware, getChats);

//Create / Access one-to-one chat
router.post("/access", authMiddleware, accessChat);

module.exports = router;
