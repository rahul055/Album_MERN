import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentid }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <h1 className="animate-bounce">Loading...</h1>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
      {posts.map((post) => (
        <div className=" mt-6 lg:mt-0" key={post._id}>
          <Post post={post} setCurrentid={setCurrentid} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
