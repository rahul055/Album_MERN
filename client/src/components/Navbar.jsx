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
              src="https://firebasestorage.googleapis.com/v0/b/album-9c412.appspot.com/o/images%2F82312ce-7b1b-337d-c874-2086c26126?alt=media&token=19da1e9e-403f-4e85-a236-8dda7bb6c8d3"
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
