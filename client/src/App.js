import React from "react";
import Posts from "./components/Posts";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <div className="container mx-auto ">
        <div className=" mt-8 border-gray-200 border-2 border-opacity-50 h-12 w-full rounded-lg shadow-md text-center align-center text-5xl font-bold text-purple-500">
          Album
        </div>
        {/* <img src={memories} alt="" /> */}
        <div className="mt-10 grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-yellow-100">
            <Posts />
          </div>
          <div className="bg-indigo-600">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
