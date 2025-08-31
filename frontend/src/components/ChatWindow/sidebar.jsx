import React from "react";

// const chats = [
//   { id: 1, name: "Sarah Wilson", message: "Thanks for the presentation!", online: true },
//   { id: 2, name: "Design Team", message: "Alex: The new mockups are ready" },
//   { id: 3, name: "John Miller", message: "See you at the meeting tomorrow 👍" },
//   { id: 4, name: "Marketing Team", message: "Emma: Campaign launch is scheduled" },
//   { id: 5, name: "Lisa Chen", message: "The documents are ready", online: true },
// ];

export default function Sidebar() {
  return (
    <div className="w-1/3 border-r bg-gray-50 h-screen">
      <div className="p-4 font-bold text-xl border-b">Chats</div>
      <div className="overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b"
          >
            <div className="relative w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">
              {chat.name.split(" ").map((n) => n[0]).join("")}
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              )}
            </div>
            <div>
              <p className="font-medium">{chat.name}</p>
              <p className="text-sm text-gray-500 truncate w-40">{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
