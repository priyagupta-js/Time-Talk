import { GiTimeTrap } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FiAperture, FiStar, FiArchive, FiSettings } from "react-icons/fi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () =>{
  
  const navigate = useNavigate();
  
  useEffect(() =>{
    const token = localStorage.getItem("token");
    if(!token)
    {
      navigate("/login");
    }
  } , []);

  return (
    <>
    <div className="main">
      <div className="navbar">
        {/* logo */}
        <div className="logo"></div>
        <div className="">Time-Talk</div>
        {/* project-name */}
      </div>
      <div className="chatUI-wrapper">
      </div>
    </div>
    </>
  )
}

export default Home;

// const Home = () => {

//   const navigate = useNavigate();

//   useEffect(() => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     navigate("/login");
//   }
// }, []);

//   return (
//     <>
//       {/* LEFT RAIL / SIDEBAR*/}
//       <aside className="fixed left-0 top-0 h-screen w-16 bg-white text-gray-700 border-r border-gray-200">
//         <div className="flex flex-col h-full items-center py-3">
//           {/* Top: menu */}
//           <button
//             className="w-10 h-10 grid place-items-center rounded-md hover:bg-gray-100"
//             aria-label="Menu"
//           >
//             <RxHamburgerMenu className="text-2xl" />
//           </button>

//           {/* Divider */}
//           <div className="my-2 w-10 border-t border-gray-200" />

//           {/* Primary icons */}
//           <nav className="flex flex-col gap-4 items-center">
//             {/* Chats (active) */}
//             <div className="relative w-10 h-10">
//               {/* active green bar */}
//               <span className="absolute -left-2 top-2 h-6 w-1 bg-green-500 rounded-r"></span>

//               <button className="w-full h-full grid place-items-center rounded-md hover:bg-gray-100">
//                 <BiMessageRoundedDots className="text-2xl" />
//               </button>

//               {/* badge */}
//               <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-semibold rounded-full px-1.5 py-0.5 shadow">
//                 29
//               </span>
//             </div>

//             {/* Calls */}
//             {/* <button className="w-10 h-10 grid place-items-center rounded-md hover:bg-gray-100" aria-label="Calls">
//               <FiPhone className="text-xl" />
//             </button> */}

//             {/* Status (green dot indicator) */}
//             <div className="relative w-10 h-10">
//               <button className="w-full h-full grid place-items-center rounded-md hover:bg-gray-100" aria-label="Status">
//                 <FiAperture className="text-xl" />
//               </button>
//               <span className="absolute right-1 top-1 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-white"></span>
//             </div>
//           </nav>

//           {/* Spacer */}
//           <div className="flex-1" />

//           {/* Middle accent circle */}
//           {/* <div className="w-7 h-7 rounded-full border-2 border-indigo-400 animate-pulse" /> */}

//           {/* Spacer */}
//           <div className="flex-1" />

//           {/* Secondary icons */}
//           <nav className="flex flex-col gap-5 items-center">
//             <button className="w-10 h-10 grid place-items-center rounded-md hover:bg-gray-100" aria-label="Starred">
//               <FiStar className="text-xl" />
//             </button>
//             <button className="w-10 h-10 grid place-items-center rounded-md hover:bg-gray-100" aria-label="Archive">
//               <FiArchive className="text-xl" />
//             </button>
//           </nav>

//           {/* Divider */}
//           <div className="my-3 w-10 border-t border-gray-200" />

//           {/* Settings + avatar */}
//           <button className="w-10 h-10 grid place-items-center rounded-md hover:bg-gray-100" aria-label="Settings">
//             <FiSettings className="text-xl" />
//           </button>

//             {/* Profile-setting */}
//           <img
//             src="https://i.pravatar.cc/40?img=12"
//             alt="User avatar"
//             className="w-9 h-9 rounded-full mt-2 border border-gray-300 object-cover"
//           />
//           {/* Profile-setting */}
//         </div>
//       </aside>

//       {/* PAGE CONTENT (pushed right so it doesn't go under the sidebar) */}
//       <div className="pl-16">
//         <header className="w-full bg-white shadow-sm">
//           <div className="mx-auto max-w-7xl h-12 px-4 sm:px-6 lg:px-8 flex items-center gap-3">
//             {/* App icon */}
//             <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-purple-400 text-white">
//               <GiTimeTrap />
//             </div>

//             {/* Title */}
//             <div className="leading-tight">
//               <h1 className="text-[15px] sm:text-base font-semibold text-gray-900">
//                 Time Talk
//               </h1>
//             </div>
//           </div>
//         </header>

//         {/* Your main page content goes here */}
//         <main className="max-w-7xl mx-auto p-6 text-gray-700">
//           <p>Welcome to Time Talk</p>
//           <p className="text-sm text-gray-500">
//             This is the light theme sidebar version.
//           </p>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Home;

// import { RxHamburgerMenu } from "react-icons/rx";
// import { BiMessageRoundedDots } from "react-icons/bi";
// import { FiAperture, FiStar, FiArchive, FiSettings } from "react-icons/fi";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) navigate("/login");
//   }, []);

//   return (
//     <div className="flex h-screen bg-gray-100">

//       {/* ------------------------------ */}
//       {/* LEFT SIDEBAR (WhatsApp style) */}
//       {/* ------------------------------ */}
//       <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-3">
//         <button className="w-10 h-10 grid place-items-center hover:bg-gray-100 rounded">
//           <RxHamburgerMenu className="text-xl" />
//         </button>

//         <div className="my-2 w-10 border-t border-gray-200" />

//         <nav className="flex flex-col gap-4 items-center">
//           <div className="relative w-10 h-10">
//             <span className="absolute -left-2 top-2 w-1 h-6 bg-green-500 rounded-r"></span>

//             <button className="w-full h-full grid place-items-center hover:bg-gray-100 rounded">
//               <BiMessageRoundedDots className="text-2xl" />
//             </button>

//             <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] rounded-full px-1.5 py-0.5">
//               29
//             </span>
//           </div>

//           <div className="relative w-10 h-10">
//             <button className="w-full h-full grid place-items-center hover:bg-gray-100 rounded">
//               <FiAperture className="text-xl" />
//             </button>
//             <span className="absolute right-1 top-1 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-white" />
//           </div>
//         </nav>

//         <div className="flex-1" />

//         <nav className="flex flex-col gap-5 items-center">
//           <button className="w-10 h-10 grid place-items-center hover:bg-gray-100 rounded">
//             <FiStar className="text-xl" />
//           </button>
//           <button className="w-10 h-10 grid place-items-center hover:bg-gray-100 rounded">
//             <FiArchive className="text-xl" />
//           </button>
//         </nav>

//         <div className="my-3 w-10 border-t border-gray-200" />

//         <button className="w-10 h-10 grid place-items-center hover:bg-gray-100 rounded">
//           <FiSettings className="text-xl" />
//         </button>

//         <img
//           src="https://i.pravatar.cc/40?img=12"
//           className="w-9 h-9 rounded-full mt-2 border border-gray-300"
//           alt="user"
//         />
//       </aside>

//       {/* ------------------------------------------------ */}
//       {/* LEFT PANEL — CHAT LIST (just like WhatsApp Web) */}
//       {/* ------------------------------------------------ */}
//       <div className="w-80 bg-white border-r border-gray-200 flex flex-col">

//         {/* Header */}
//         <div className="h-16 flex items-center px-4 border-b border-gray-100">
//           <input
//             type="text"
//             placeholder="Search or start a new chat"
//             className="w-full bg-gray-100 text-sm px-3 py-2 rounded-lg"
//           />
//         </div>

//         {/* Chat List */}
//         <div className="flex-1 overflow-y-auto">
//           {[...Array(10)].map((_, i) => (
//             <div
//               key={i}
//               className="flex gap-3 cursor-pointer hover:bg-gray-100 px-4 py-3 border-b"
//             >
//               <div className="w-12 h-12 rounded-full bg-gray-300" />
//               <div className="flex-1">
//                 <div className="flex justify-between">
//                   <h3 className="font-medium text-gray-900">User {i + 1}</h3>
//                   <p className="text-xs text-gray-500">7:10 PM</p>
//                 </div>
//                 <p className="text-sm text-gray-500 truncate">
//                   Last message preview…
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* -------------------------------------------- */}
//       {/* RIGHT PANEL — CHAT WINDOW (full WhatsApp UI) */}
//       {/* -------------------------------------------- */}
//       <div className="flex-1 bg-gray-50 flex flex-col">

//         {/* Chat Header */}
//         <div className="h-16 bg-white border-b border-gray-200 flex items-center px-4">
//           <div className="w-10 h-10 rounded-full bg-gray-300" />
//           <div className="ml-3">
//             <h2 className="font-medium">Me</h2>
//             <p className="text-xs text-gray-500">You</p>
//           </div>
//         </div>

//         {/* Chat Messages */}
//         <div className="flex-1 overflow-y-auto bg-[url('/whatsapp-bg.png')] bg-cover p-4">
//           <div className="flex justify-end">
//             <div className="bg-green-200 px-4 py-2 rounded-lg max-w-xs">
//               <p>Your message with PDF</p>
//               <p className="text-xs text-gray-600 text-right">7:10 PM</p>
//             </div>
//           </div>
//         </div>

//         {/* Message Input */}
//         <div className="h-16 bg-white border-t border-gray-200 flex items-center px-4 gap-3">
//           <input
//             className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm"
//             placeholder="Type a message"
//           />
//           <button className="p-2 bg-green-500 text-white rounded-full">
//             Send
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

