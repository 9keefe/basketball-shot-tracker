import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/home");
  }

  return (
    <div className="bg-orange-500 min-h-screen flex flex-col items-center">

      <div className="w-full max-w-md px-8 py-8">
        <h1 className="text-3xl font-bold text-white leading-none">Hello.</h1>
        <p className="text-3xl text-white">Welcome to ShotSense!</p>
        <p className="text-3xl text-white mt-5">Create your account.</p>
      </div>

      <div className="flex-1 w-full max-w-lg bg-white rounded-t-3xl shadow-lg p-8 pt-16">
        <div className="space-y-4">

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-600"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              placeholder="john smith"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-orange-500 text-gray-800 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-orange-500 text-gray-800 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-orange-500 text-gray-800 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-semibold text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="confirm password"
              className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-orange-500 text-gray-800 py-2"
            />
          </div>

          {/* <div className="bg-red-500 w-full p-2 rounded">
            <p className="text-white"></p>
          </div> */}

          <div className="pt-8 pb-8">
            <button 
              onClick={handleSignIn}
              className="w-full py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600"
            >
              SIGN UP
            </button>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-400">Already have an account?</p>
            <Link
              to="/signin"
              className="text-md font-semibold text-gray-600 hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}