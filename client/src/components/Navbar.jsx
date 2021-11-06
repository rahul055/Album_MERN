import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import decode from "jwt-decode";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [user]);

  return (
    <div className="border-0 shadow-none mt-5 bg-white border-gray-200 sm:border-2 border-opacity-50 h-8  w-full rounded-lg sm:shadow-md  font-mono flex justify-between overflow-hidden">
      <div className="justify-start">
        <span className="md:ml-4 text-2xl my-auto justify-center text-center font-bold text-red-400 ">
          ALBUM
        </span>
      </div>
      <div className="">
        {user ? (
          <div className="justify-end">
            {/* <img
              className="inline-block h-8 w-8 md:h-10 md:w-10 rounded-full ring-2 ring-white"
              src={user?.result.imageUrl}
              alt={user?.result.name.charAt(0)}
            /> */}
            <span className="text-gray-500 font-bold text-md mx-3">
              {user?.result.name}
            </span>
            <button
              className="md:py-0 md:px-0 mr-1 text-red-500 text-sm py-2 rounded-2xl hover:bg-gray-100 uppercase"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <button className=" mr-1 text-white  font-bold px-3 rounded-xl bg-blue-400 uppercase">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
