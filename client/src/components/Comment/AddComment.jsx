import React from "react";
import { BsEmojiSmile } from "react-icons/bs";

function AddComment() {
  return (
    <div className="flex flex-row justify-between items-center px-3 py-2 border-2 border-gray-300">
      <BsEmojiSmile className="w-7 h-7" />
      <textarea
        name="comment"
        id="comment"
        cols="50"
        className="h-7 border-2 mx-1 border-gray-400"
      ></textarea>
      <h1 className="text-blue-500 font-medium text-lg">Post</h1>
    </div>
  );
}

export default AddComment;
