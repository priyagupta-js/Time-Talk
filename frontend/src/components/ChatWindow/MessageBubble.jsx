import React from "react";

export default function MessageBubble({ text, time, isSender }) {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-xs p-3 rounded-lg ${
          isSender ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <p>{text}</p>
        <span className="block text-xs mt-1 opacity-70">{time}</span>
      </div>
    </div>
  );
}
