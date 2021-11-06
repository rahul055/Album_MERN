import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { singin, singup } from "../actions/auth";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSignup) {
      dispatch(singup(formData, history));
    } else {
      dispatch(singin(formData, history));
    }
  };

  const togglehandle = () => setIsSignup((prev) => !prev);

  return (
    <div>
      <div className="py-6">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm">
          <form onSubmit={handleSubmit} className="w-full p-8 ">
            <div className="mt-2 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <span className="text-xs text-center text-gray-500 uppercase">
                {isSignup ? "Signup" : "login"} with email
              </span>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            {isSignup && (
              <div className="flex">
                <div className="mt-2 w-1/2 mr-3">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    First Name
                  </label>
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    name="firstName"
                    type="text"
                    onChange={handleInput}
                    value={formData.firstName}
                  />
                </div>
                <div className="mt-2 w-1/2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="text"
                    name="lastName"
                    onChange={handleInput}
                    value={formData.lastName}
                  />
                </div>
              </div>
            )}
            <div className="mt-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                name="email"
                onChange={handleInput}
                value={formData.email}
              />
            </div>
            <div className="mt-2">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                name="password"
                onChange={handleInput}
                value={formData.password}
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                {isSignup ? "Signup" : "Login"}
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <button
                className="text-sm text-blue-600 uppercase"
                onClick={togglehandle}
              >
                {isSignup ? "or login" : "or sign up"}
              </button>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
