import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { CreatePost, updatePost } from "../actions/posts";

import { ref, uploadString } from "firebase/storage";
import storage from "../firebase/config";

const Form = ({ currentid, setCurrentid }) => {
  const dispatch = useDispatch();
  const storageRef = ref(storage, "images");

  const post = useSelector((state) =>
    currentid ? state.posts.find((p) => p._id === currentid) : null
  );

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const firebaseuploadfile = () => {
    const message4 = postData.selectedFile;
    uploadString(storageRef, message4, "data_url")
      .then((snapshot) => {
        console.log("Uploaded a data_url string!");
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
      <h5 className="text-center text-lg lg:text-2xl font-mono border-b-2">
        {currentid ? "Updating" : "Creating"} a post
      </h5>
      <form onSubmit={submithandler} className="mx-3 rounded-md my-3">
        <input
          type="text"
          className="w-full  border-2 rounded my-2"
          placeholder="Creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <input
          type="text"
          className="w-full  border-2 rounded my-2"
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          type="text"
          className="w-full  border-2 rounded my-2"
          placeholder="Message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          type="text"
          className="w-full  border-2 rounded my-2"
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
          disabled={!postData}
          type="submit"
          className="w-full ring-4 bg-blue-400 mt-4 h-8 font-mono rounded font-bold hover:bg-blue-600 text-gray-700 hover:text-white"
        />
      </form>
    </div>
  );
};

export default Form;
