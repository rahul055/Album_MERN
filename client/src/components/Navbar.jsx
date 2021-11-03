import React from "react";

const Navbar = () => {
  const user = true;
  return (
    <div className="border-0 shadow-none mt-5 bg-white border-gray-200 sm:border-2 border-opacity-50 h-8 md:h-12 w-full rounded-lg sm:shadow-md  font-mono flex justify-between overflow-hidden">
      <div>
        <span className="md:ml-4 text-3xl my-auto justify-center text-center md:text-5xl font-bold text-blue-400 ">
          ALBUM
        </span>
      </div>
      <div className="">
        {user ? (
          <div className="">
            <img
              className="inline-block h-8 w-8 md:h-10 md:w-10 rounded-full ring-2 ring-white"
              src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              //   src={user.result.imageUrl}
              //   alt={user.result.name}
            />
            <span className="text-gray-500 font-bold text-md mx-3">
              {/* {user.result.name} */}Rahul J
            </span>
            <button className="md:py-1 md:px-2 mr-1 text-red-500 text-sm py-2 px-4 rounded-2xl hover:bg-gray-100 uppercase">
              logout
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
