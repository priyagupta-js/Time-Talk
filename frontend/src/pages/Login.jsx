import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MessageCircle, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setUser } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      setUser(data.user);
      navigate("/home");
    } catch (err) {
      setError("Network error");
    }
  }

  return (
    <div className="min-h-screen bg-fuchsia-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl animate-float delay-2000" />
      </div>

      <div
        className="relative w-full max-w-md bg-white
                      rounded-2xl shadow-xl animate-slide-up"
      >
        {/* Header */}
        <div className="p-6 text-center space-y-4">
          <div
            className="mx-auto w-16 h-16 bg-linear-to-br from-purple-400 to-blue-500 rounded-2xl
                          flex items-center justify-center shadow-lg"
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Welcome Back!
            </h2>
            <p className="text-muted-foreground">
              Sign in to continue chatting
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="px-6 pb-6 space-y-5">
          {/* Username */}
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full h-12 px-4 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 border  border-gray-200
                         focus:outline-none
                         focus:ring-2 focus:border-transparent transition"
            />

          {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-12 px-4 pr-12 rounded-lg  bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-200
                           focus:outline-none
                           focus:ring-2 focus:border-transparent transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2
                           text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

          {/* Error */}
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-12 text-base font-semibold rounded-lg
                       bg-linear-to-r from-purple-500 to-blue-500
                       text-white shadow-lg hover:shadow-xl
                       hover:opacity-90 transition-all"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="pb-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-primary font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
