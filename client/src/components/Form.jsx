import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import uuid from "react-uuid";

import storage from "../firebase/config";

import { useDispatch, useSelector } from "react-redux";
import { CreatePost, updatePost } from "../actions/posts";

import { ref, uploadString, getDownloadURL } from "firebase/storage";

const Form = ({ currentid, setCurrentid }) => {
  const dispatch = useDispatch();
  const storageRef = ref(storage, `images/${uuid()}`);

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    imageId: "",
  });
  const [imageFile, setImageFile] = useState("");

  const post = useSelector((state) =>
    currentid ? state.posts.find((p) => p._id === currentid) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const firebaseuploadfile = () => {
    const message4 = postData.selectedFile;
    uploadString(storageRef, message4, "data_url")
      .then((snapshot) => {
        const data = snapshot.metadata.fullPath.slice(7, 60);

        getDownloadURL(ref(storage, `images/${data}`))
          .then((url) => {
            setPostData({ ...postData, selectedFile: "" });
            return setPostData({
              ...postData,
              selectedFile: url,
              imageId: data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => console.log(err));
  };

  const cleardata = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
      imageId: "",
    });
    setCurrentid(null);
  };

  const submithandler = (event) => {
    event.preventDefault();
    firebaseuploadfile();
    if (currentid) {
      dispatch(updatePost(currentid, postData));
    } else {
      dispatch(CreatePost(postData));
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
          placeholder="Creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
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
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <input
          disabled={!postData.creator || !postData.title}
          type="submit"
          className="w-full ring-4 bg-blue-400 mt-4 h-8 font-mono rounded font-bold hover:bg-blue-600 text-gray-700 hover:text-white"
        />
        <button
          className="w-full bg-red-200 mt-4 h-8 font-mono rounded font-bold hover:bg-red-600 text-gray-700 hover:text-white"
          onClick={cleardata}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
