import React, { useState } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { text: "Hey! How's the project going?", time: "10:30 AM", isSender: false },
    { text: "Going really well! We're almost done with the initial prototype.", time: "10:32 AM", isSender: true },
    { text: "That's awesome! Can't wait to see it.", time: "10:33 AM", isSender: false },
    { text: "I'll send you the demo link once it's ready. Should be later today.", time: "10:35 AM", isSender: true },
  ]);
  const [newMsg, setNewMsg] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    setMessages([...messages, { text: newMsg, time: "Now", isSender: true }]);
    setNewMsg("");
  };

  return (
    <div className="flex flex-col w-2/3 h-screen">
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">
          SW
        </div>
        <div>
          <p className="font-bold">Sarah Wilson</p>
          <p className="text-sm text-green-600">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-white">
        {messages.map((m, idx) => (
          <MessageBubble key={idx} {...m} />
        ))}
      </div>

      {/* Input */}
      <form onSubmit={sendMessage} className="p-3 border-t flex gap-2">
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}
