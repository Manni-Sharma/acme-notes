"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="w-full max-w-md bg-[#1e1e1e] text-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png" // Path to your logo
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-[#e0e0e0] mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-[#333333] text-[#e0e0e0] border border-[#444444] rounded-md focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-[#e0e0e0] mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-[#333333] text-[#e0e0e0] border border-[#444444] rounded-md focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-700 text-white rounded-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-pr-purple-500"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-[#e0e0e0]">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <Link
              href="#"
              className="text-purple-400 hover:underline ml-1"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
