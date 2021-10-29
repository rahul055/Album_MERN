import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";
import Form from "./components/Form";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

function App() {
  const dispatch = useDispatch();

  const [currentid, setCurrentid] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <div className="container mx-auto ">
        <div className="border-0 shadow-none mt-8 bg-white border-gray-200 sm:border-2 border-opacity-50 h-12 w-full rounded-lg sm:shadow-md text-center align-center text-5xl items-center font-bold text-blue-400 font-mono ">
          <span className="">ALBUM</span>
        </div>
        {/* <img src={memories} alt="" /> */}
        <div className="mt-6 grid sm:grid-cols-3 md:gap-3 ">
          <div className=" col-span-6 mx-auto sm:col-span-3 lg:col-span-1 bg-gray-50 rounded-xl lg:h-1/2">
            <Form currentid={currentid} setCurrentid={setCurrentid} />
          </div>
          <div className="col-span-6 md:gap-4 lg:col-span-2">
            <Posts setCurrentid={setCurrentid} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
