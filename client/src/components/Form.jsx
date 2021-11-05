import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";

import storage from "../firebase/config";

import { useDispatch, useSelector } from "react-redux";
import { CreatePost, updatePost } from "../actions/posts";

import { ref, uploadString } from "firebase/storage";

const Form = ({ currentid, setCurrentid }) => {
  const dispatch = useDispatch();
  const [imageData, setImageData] = useState("");
  const randomnumber = Math.floor(Math.random() * 20);
  var imageReferance = `${imageData.slice(27, 50)}${randomnumber}`;
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    imageID: "",
  });
  const storageRef = ref(storage, `images/${imageReferance}`);

  const post = useSelector((state) =>
    currentid ? state.posts.find((p) => p._id === currentid) : null
  );
  const username = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const firebaseuploadfile = async () => {
    const baseimagedata = imageData;
    try {
      await uploadString(storageRef, baseimagedata, "data_url");
      dispatch(
        CreatePost({
          ...postData,
          creator: username.result.name,
          imageID: imageReferance,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const cleardata = () => {
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
      imageID: "",
    });
    setCurrentid(null);
    setImageData("");
  };

  const submithandler = async (event) => {
    event.preventDefault();
    if (currentid) {
      dispatch(updatePost(currentid, postData));
    } else {
      firebaseuploadfile();
    }
    cleardata();
  };

  return (
    <div>
      <h5 className="text-center text-lg lg:text-2xl font-mono border-b-2 bg-gray-50">
        {currentid ? "Updating" : "Creating"} a post
      </h5>
      <form
        onSubmit={submithandler}
        className="mx-3 p-2 rounded-md my-3 bg-gray-100"
      >
        <input
          type="text"
          className="w-full  border-2 rounded-lg my-2"
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          type="text"
          className="w-full  border-2 rounded-lg my-2"
          placeholder="Message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          type="text"
          className="w-full  border-2 rounded-lg my-2"
          placeholder="Tags"
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className="">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setImageData(base64)}
          />
        </div>
        <input
          disabled={!postData.title}
          type="submit"
          className="w-full ring-4 bg-blue-400 mt-4 h-8 font-mono rounded font-bold hover:bg-blue-600 text-gray-700 hover:text-white"
        />
      </form>
      <button
        className="w-full bg-red-200 mt-4 h-8 font-mono rounded font-bold hover:bg-red-600 text-gray-700 hover:text-white"
        onClick={cleardata}
      >
        Clear
      </button>
    </div>
  );
};

export default Form;
