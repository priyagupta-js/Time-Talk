import { Routes, Route, BrowserRouter , Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import "./index.css";
import {useAuth} from "./context/AuthContext";



function App() {

const {user, loading } = useAuth();

if (loading) return <p>Loading... </p>;

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
         <Route path="/" element={<Index />} />
          <Route path="/login" element={!user? <Login />: <Navigate to = "/home"/>} />
          <Route path="/signup" element={!user? <Signup />: <Navigate to = "/home"/>} />
          <Route path="/home" element={user? <Home /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
