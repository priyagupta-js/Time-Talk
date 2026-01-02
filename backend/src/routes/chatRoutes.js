const express = require("express");
const router = express.Router();
const Chat = require("../models/ChatModel");
const authMiddleware = require("../middleware/auth");

// GET all chats for logged-in user
router.get("/", authMiddleware, async (req, res) => {
  const chats = await Chat.find({
    users: { $in: [req.userId] },
  })
    .populate("users", "name username email")
    .populate("lastMessage")
    .sort({ updatedAt: -1 });

  res.json(chats);
});

// CREATE or GET one-to-one chat
router.post("/access", authMiddleware, async (req, res) => {
  const { userId } = req.body;

  let chat = await Chat.findOne({
    isGroupChat: false,
    users: { $all: [req.userId, userId] },
  }).populate("users", "name email");

  if (!chat) {
    chat = await Chat.create({
      users: [req.userid, userId],
    });

    chat = await Chat.findById(chat._id).populate("users","name email");
  }

  res.json(chat);
});

module.exports = router;
