import { GiTimeTrap } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FiAperture, FiStar, FiArchive, FiSettings } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { setUser } = useAuth();

  const handleLogout = async () => {
    await fetch(`${import.meta.env.VITE_BACKEND_API}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    setUser(null); // this triggers redirect via App.jsx
  };

  return (
    <div className="main">
      <div className="navbar">
        <div className="logo"></div>
        <div>Time-Talk</div>
      </div>

      <div className="chatUI-wrapper">
        {/* Chat UI will come here */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
