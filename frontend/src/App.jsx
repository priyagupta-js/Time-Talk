import {  Routes,Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/signup";
import Home from "./pages/Home/Home";
import "./index.css";
function App() {
  

  return (
      <BrowserRouter>
      <div className="app">
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App;
