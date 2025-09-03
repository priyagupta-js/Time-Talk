import { GiTimeTrap } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FiPhone, FiAperture, FiStar, FiArchive, FiSettings } from "react-icons/fi";

const Home = () => {
  return (
    <>
      {/* LEFT RAIL / SIDEBAR*/}
      <aside className="fixed left-0 top-0 h-screen w-16 bg-white text-gray-700 border-r border-gray-200">
        <div className="flex flex-col h-full items-center py-3">
          {/* Top: menu */}
          <button
            className="w-10 h-10 grid place-items-center rounded-md hover:bg-gray-100"
            aria-label="Menu"
          >
            <RxHamburgerMenu className="text-2xl" />
          </button>

          {/* Divider */}
          <div className="my-2 w-10 border-t border-gray-200" />

          {/* Primary icons */}
          <nav className="flex flex-col gap-4 items-center">
            {/* Chats (active) */}
            <div className="relative w-10 h-10">
              {/* active green bar */}
              <span className="absolute -left-2 top-2 h-6 w-1 bg-green-500 rounded-r"></span>

              <button className="w-full h-full grid place-items-center rounded-md hover:bg-gray-100">
                <BiMessageRoundedDots className="text-2xl" />
              </button>

              {/* badge */}
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-semibold rounded-full px-1.5 py-0.5 shadow">
                29
              </span>
            </div>

            {/* Calls */}
            {/* <button className="w-10 h-10 grid place-items-center rounded-md hover:bg-gray-100" aria-label="Calls">
              <FiPhone className="text-xl" />
            </button> */}

            {/* Status (green dot indicator) */}
            <div className="relative w-10 h-10">
              <button className="w-full h-full grid place-items-center rounded-md hover:bg-gray-100" aria-label="Status">
                <FiAperture className="text-xl" />
              </button>
              <span className="absolute right-1 top-1 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-white"></span>
            </div>
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Middle accent circle */}
          {/* <div className="w-7 h-7 rounded-full border-2 border-indigo-400 animate-pulse" /> */}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Secondary icons */}
          <nav className="flex flex-col gap-5 items-center">
            <button className="w-10 h-10 grid place-items-center rounded-md hover:bg-gray-100" aria-label="Starred">
              <FiStar className="text-xl" />
            </button>
            <button className="w-10 h-10 grid place-items-center rounded-md hover:bg-gray-100" aria-label="Archive">
              <FiArchive className="text-xl" />
            </button>
          </nav>

          {/* Divider */}
          <div className="my-3 w-10 border-t border-gray-200" />

          {/* Settings + avatar */}
          <button className="w-10 h-10 grid place-items-center rounded-md hover:bg-gray-100" aria-label="Settings">
            <FiSettings className="text-xl" />
          </button>

            {/* Profile-setting */}
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User avatar"
            className="w-9 h-9 rounded-full mt-2 border border-gray-300 object-cover"
          />
          {/* Profile-setting */}
        </div>
      </aside>

      {/* PAGE CONTENT (pushed right so it doesn't go under the sidebar) */}
      <div className="pl-16">
        <header className="w-full bg-white shadow-sm">
          <div className="mx-auto max-w-7xl h-12 px-4 sm:px-6 lg:px-8 flex items-center gap-3">
            {/* App icon */}
            <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-purple-400 text-white">
              <GiTimeTrap />
            </div>

            {/* Title */}
            <div className="leading-tight">
              <h1 className="text-[15px] sm:text-base font-semibold text-gray-900">
                Time Talk
              </h1>
            </div>
          </div>
        </header>

        {/* Your main page content goes here */}
        <main className="max-w-7xl mx-auto p-6 text-gray-700">
          <p>Welcome to Time Talk 👋</p>
          <p className="text-sm text-gray-500">
            This is the light theme sidebar version.
          </p>
        </main>
      </div>
    </>
  );
};

export default Home;
