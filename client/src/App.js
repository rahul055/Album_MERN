import React, { useEffect } from "react";
import Posts from "./components/Posts";
import Form from "./components/Form";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);

  return (
    <div>
      <div className="container mx-auto ">
        <div className=" mt-8 border-gray-200 border-2 border-opacity-50 h-12 w-full rounded-lg shadow-md text-center align-center text-4xl items-center font-bold text-gray-600 font-mono">
          ALBUM
        </div>
        {/* <img src={memories} alt="" /> */}
        <div className="mt-6 grid grid-cols-6 lg:grid-cols-3  ">
          <div className="col-span-6 sm:col-start-2 sm:col-span-4 lg:col-span-1 bg-gray-50 ">
            <Form />
          </div>
          <div className="col-span-2 bg-purple-100">
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
