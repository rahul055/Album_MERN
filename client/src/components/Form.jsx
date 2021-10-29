import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { CreatePost, updatePost } from "../actions/posts";

const Form = ({ currentid, setCurrentid }) => {
  const dispatch = useDispatch();
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
    console.log(currentid, "from Form component");
    if (currentid === 0) {
      dispatch(CreatePost(postData));
      cleardata();
    } else {
      dispatch(updatePost(currentid, postData));
      cleardata();
    }
  };

  return (
    <div>
      <h5 className="text-center text-lg lg:text-2xl font-mono border-b-2">
        Creating a post
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
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
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
