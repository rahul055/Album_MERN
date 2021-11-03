import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Posts from "../components/Posts";

import { getPosts } from "../actions/posts";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const [currentid, setCurrentid] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentid]);

  return (
    <div className="container mx-auto ">
      <Navbar />
      <div className="mt-6 grid sm:grid-cols-3 md:gap-3 ">
        <div className=" col-span-6 mx-auto sm:col-span-3 lg:col-span-1  rounded-xl md:h-1/2 py-6">
          <Form currentid={currentid} setCurrentid={setCurrentid} />
        </div>
        <div className="col-span-6 md:gap-4 lg:col-span-2">
          <Posts setCurrentid={setCurrentid} />
        </div>
      </div>
    </div>
  );
};

export default Home;
