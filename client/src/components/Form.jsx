import React, { useState } from "react";
import FileBase from "react-file-base64";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const submithandler = (e) => {
    e.preventDefault();

    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <div>
      <h5 className="text-center text-lg lg:text-2xl font-mono border-b-2">
        Creating a post
      </h5>
      <form onSubmit className="mx-3 rounded-md my-3">
        <input
          type="text"
          className="w-full  border-2 rounded my-2"
          placeholder="creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <input
          type="text"
          className="w-full  border-2 rounded my-2"
          placeholder="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          type="text"
          className="w-full  border-2 rounded my-2"
          placeholder="message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          type="text"
          className="w-full  border-2 rounded my-2"
          placeholder="tags"
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
        <button
          type="submit"
          className="w-full bg-blue-400 mt-4 h-8 font-mono rounded font-bold hover:bg-blue-700 hover:text-gray-400"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
