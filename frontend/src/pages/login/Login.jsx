import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// useNavigate -> hook that redirects to another route in react app.

  const Login =() => {
  const [username , setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error , setError] = useState("");
  const navigate = useNavigate();

async function handleLogin(e)
{
    e.preventDefault();
    setError("");
    try
    {
    const res = await fetch("http://localhost:5000/api/auth/login",{
      method:"POST", 
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({username,password})
      });

      const data = await res.json();
      if(!res.ok)
      {
        setError(data.message || "Login failed");
        return;
      }
      navigate("/home");
    }catch(err)
    {
      console.error("Login fetch failed:", err);
      setError("Network Error");
    }
}

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="bg-purple-900/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white">Welcome Back</h2>
        <p className="text-center text-gray-300 mb-6">Sign in to continue to your chat</p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-200">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="mt-1 w-full p-3 rounded-lg bg-black/70 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Password</label>
            <input
              type="password"
                 value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 w-full p-3 rounded-lg bg-black/70 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-600" />
          <span className="px-3 text-gray-400 text-sm">OR CONTINUE WITH</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-black/70 text-white py-3 rounded-lg hover:bg-black/80 transition">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup"  className="text-blue-400 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

// if a variable is null , then it can be reassigned the value ;
