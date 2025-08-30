import {  Routes,Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/signup";
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
