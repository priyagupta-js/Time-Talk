import React, { useEffect, useState } from "react";
import { Menu, MoreVertical, Send } from "lucide-react";
import { useSocket } from "../context/SocketContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const socket = useSocket();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const userId = user?._id || user?.id || null;

  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const [showStartChat, setShowStartChat] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  /* ---------------- LOGOUT ---------------- */
  const handleLogout = async () => {
    await fetch(`${import.meta.env.VITE_BACKEND_API}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    setUser(null);
    navigate("/login");
  };

  /* ---------------- HELPER: GET OTHER USER ---------------- */
  const getOtherUser = (chat) => {
    if (!chat || !Array.isArray(chat.users)) return null;

    return chat.users.find(
      (u) => u && typeof u === "object" && u._id !== userId
    );
  };

  /* ---------------- GUARD ---------------- */
  if (!userId) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading chats...
      </div>
    );
  }

  useEffect(() => {
  if (!activeChat) return;

  fetch(`${import.meta.env.VITE_BACKEND_API}/api/messages/${activeChat._id}`, {
    credentials: "include",
  })
    .then((res) => res.json())
    .then(setMessages)
    .catch(() => setMessages([]));
}, [activeChat]);


  /* ---------------- FETCH CHATS ---------------- */
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API}/api/chats`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then(setChats)
      .catch(() => setChats([]));
  }, []);

  /* ---------------- JOIN ALL CHATS ---------------- */
  useEffect(() => {
    if (!socket || chats.length === 0) return;

    chats.forEach((chat) => {
      if (chat?._id) {
        socket.emit("joinChat", chat._id);
      }
    });
  }, [socket, chats]);

  /* ---------------- RECEIVE MESSAGE ---------------- */
  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (msg) => {
      if (activeChat && msg.chat === activeChat._id) {
      setMessages((prev) => [...prev, msg]);
    }

    // always update chat list ordering
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat._id === msg.chat
          ? { ...chat, lastMessage: msg }
          : chat
      )
    );
  };

    socket.on("newMessage", handleNewMessage);
      return () => socket.off("newMessage", handleNewMessage);
}, [socket, activeChat]);

  /* ---------------- SEND MESSAGE ---------------- */
  const sendMessage = () => {
  if (!message.trim() || !activeChat) return;

  const tempMsg = {
    _id: Date.now(),
    sender: userId,
    chat: activeChat._id,
    content: message,
  };

  setMessages((prev) => [...prev, tempMsg]); // instant UI

  socket.emit("sendMessage", {
    chatId: activeChat._id,
    content: message,
  });

  setMessage("");
};


  /* ---------------- START CONVERSATION ---------------- */
  const startConversation = async () => {
    const userRes = await fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/users/search?q=${searchQuery}`,
      { credentials: "include" }
    );

    if (!userRes.ok) {
      alert("User not found");
      return;
    }

    const otherUser = await userRes.json();

    const chatRes = await fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/chats/access`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ userId: otherUser._id }),
      }
    );

    const chat = await chatRes.json();

    setChats((prev) => [chat, ...prev]);
    setActiveChat(chat);
    setShowStartChat(false);
    setSearchQuery("");
  };

  return (
    <div className="h-screen flex bg-gray-50">

      {/* LEFT SIDEBAR */}
      <div className="w-96 bg-white border-r relative">

        {/* TOP BAR */}
        <div className="p-4 border-b flex items-center justify-between relative">
          <button onClick={() => setOpen(!open)}>
            <Menu />
          </button>

          <button
            onClick={() => setShowStartChat(true)}
            className="text-sm text-purple-600 font-medium"
          >
            New Chat
          </button>

          {/* DROPDOWN */}
          {open && (
            <div className="absolute top-14 left-4 bg-white shadow-md rounded w-48 p-3 z-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold">
                  {user?.name?.[0] || "U"}
                </div>
                <span className="font-medium text-sm">
                  {user?.name || "User"}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="text-red-500 text-sm w-full text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* EMPTY STATE */}
        {chats.length === 0 && (
          <div className="p-6 text-gray-500 text-center">
            <p>No conversations yet</p>
            <p className="text-sm mt-1">
              Start a chat using username or email
            </p>
          </div>
        )}

        {/* CHAT LIST */}
        {chats.map((chat) => {
          const otherUser = getOtherUser(chat);

          return (
            <div
              key={chat._id}
              onClick={() => setActiveChat(chat)}
              className={`p-4 cursor-pointer ${
                activeChat?._id === chat._id ? "bg-blue-50" : ""
              }`}
            >
              <div className="font-semibold">
                {otherUser?.name || "New Chat"}
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <div className="px-6 py-4 border-b flex justify-between">
          <div className="font-semibold">
            {activeChat
              ? getOtherUser(activeChat)?.name || "Chat"
              : "Select a chat"}
          </div>
          <MoreVertical />
        </div>

        {/* MESSAGES */}
        <div className="flex-1 p-6 overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`flex ${
                msg.sender === userId ? "justify-end" : "justify-start"
              }`}
            >
              <div className="bg-white px-4 py-2 rounded-xl shadow">
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT */}
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

      {/* START CHAT MODAL */}
      {showStartChat && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setShowStartChat(false)}
        >
          <div
            className="bg-white p-6 rounded-lg w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-semibold mb-3">Start Conversation</h3>

            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Username or Email"
              className="w-full px-3 py-2 border rounded"
            />

            <button
              onClick={startConversation}
              className="mt-4 w-full bg-purple-600 text-white py-2 rounded"
            >
              Start
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
