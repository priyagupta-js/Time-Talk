const express = require("express");
const router = express.Router();
const Chat = require("../models/ChatModel");
const authMiddleware = require("../middleware/auth");

//GET all chats for logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const chats = await Chat.find({
      users: { $in: [req.userId] },
    })
      .populate("users", "name email")
      .populate("lastMessage")
      .sort({ updatedAt: -1 });

    res.json(chats);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch chats" });
  }
});

// 🔹 CREATE or GET one-to-one chat
router.post("/access", authMiddleware, async (req, res) => {
  const { userId } = req.body;

  try {
    let chat = await Chat.findOne({
      isGroupChat: false,
      users: { $all: [req.userId, userId] },
    }).populate("users", "name email");

    // create if not exists
    if (!chat) {
      chat = await Chat.create({
        isGroupChat: false,
        users: [req.userId, userId],   // ✅ FIXED
      });

      chat = await Chat.findById(chat._id).populate(
        "users",
        "name email"
      );
    }

    res.json(chat);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Chat access failed" });
  }
});

module.exports = router;
