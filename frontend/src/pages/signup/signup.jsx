import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () =>{

const [name,setName] =useState("");
const [username,setUserame] =useState("");
const [email,setEmail] = useState("");
const [password,setPassword] =useState("");
const [confirm, setConfirm] = useState("");
const [error, setError] = useState("");
const navigate = useNavigate();

async function handleSignUp()
{
  e.preventDefault();
  setError("");
}
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-violet-700">
      <div className="bg-purple-900/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white">Join the Chat</h2>
        <p className="text-center text-gray-300 mb-6">Create your account to get started</p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-200">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-1 w-full p-3 rounded-lg bg-black/70 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Username</label>
            <input
              type="text"
              placeholder="Choose a username"
              className="mt-1 w-full p-3 rounded-lg bg-black/70 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full p-3 rounded-lg bg-black/70 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="mt-1 w-full p-3 rounded-lg bg-black/70 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="mt-1 w-full p-3 rounded-lg bg-black/70 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-600" />
          <span className="px-3 text-gray-400 text-sm">OR CONTINUE WITH</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;