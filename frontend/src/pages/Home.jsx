import React, { useEffect, useState } from "react";
import {
  Menu, Search, Phone, MoreVertical,
  Paperclip, Smile, Mic, Send,
  Check, CheckCheck
} from "lucide-react";
import { useSocket } from "../context/SocketContext";
import { useAuth } from "../context/AuthContext";

const chats = [
  { _id: "chat1", name: "Priya Sharma", avatar: "PS" },
  { _id: "chat2", name: "Rahul Kumar", avatar: "RK" },
];

export default function Home() {
  const socket = useSocket();
  const { user } = useAuth();

  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  // Join chat room
  useEffect(() => {
    if (!socket || !activeChat) return;

    socket.emit("joinChat", activeChat._id);

    setMessages([]); // reset when switching chat
  }, [socket, activeChat]);

  // Listen for incoming messages
  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (msg) => {
      if (msg.chat === activeChat?._id) {
        setMessages((prev) => [...prev, msg]);
      }
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, activeChat]);

  // Send message
  const sendMessage = () => {
    if (!message.trim() || !socket || !activeChat) return;

    socket.emit("sendMessage", {
      chatId: activeChat._id,
      content: message,
    });

    setMessage("");
  };

  return (
    <div className="h-screen flex bg-gray-50">
      {/* LEFT SIDEBAR */}
      <div className="w-96 bg-white border-r">
        <div className="p-4 border-b flex items-center gap-3">
          <Menu />
          <input
            className="flex-1 px-3 py-2 bg-gray-100 rounded-full"
            placeholder="Search"
          />
        </div>

        {chats.map((chat) => (
          <div
            key={chat._id}
            onClick={() => setActiveChat(chat)}
            className={`p-4 cursor-pointer ${
              activeChat?._id === chat._id ? "bg-blue-50" : ""
            }`}
          >
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center">
                {chat.avatar}
              </div>
              <span className="font-semibold">{chat.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT CHAT AREA */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b flex justify-between">
          <div className="font-semibold">
            {activeChat ? activeChat.name : "Select a chat"}
          </div>
          <MoreVertical />
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`flex ${
                msg.sender === user._id ? "justify-end" : "justify-start"
              }`}
            >
              <div className="bg-white px-4 py-2 rounded-xl shadow">
                <p>{msg.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        {activeChat && (
          <div className="px-6 py-4 border-t flex gap-3">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 px-4 py-2 bg-gray-100 rounded-full"
              placeholder="Message"
            />
            <button
              onClick={sendMessage}
              className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              <Send size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
