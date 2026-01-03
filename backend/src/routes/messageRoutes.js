const express = require("express");
const router = express.Router();
const Message = require("../models/MessagesModel");
const authMiddleware = require("../middleware/auth");

router.get("/:chatId", authMiddleware, async (req, res) => {
  try {
    const messages = await Message.find({
      chat: req.params.chatId,
    })
      .populate("sender", "name email")
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Failed to load messages" });
  }
});

module.exports = router;
