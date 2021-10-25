import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
