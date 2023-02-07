import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMinus } from "react-icons/ai";
import SingleComment from "./SingleComment";

function Comments() {
  const [replies, setReplies] = useState([
    {
      user: "prax_killer",
      repliedTo: "anshul21",
      message: "GOAT",
      isReply: true,
    },
    {
      user: "aniket",
      repliedTo: "anshul21",
      message: "Best Ever",
      isReply: true,
    },
  ]);

  const [isRepliesOpen, setIsRepliesOpen] = useState(false);

  function replyHandler() {
    setIsRepliesOpen(!isRepliesOpen);
  }

  return (
    <div className="w-full h-3/4 flex flex-col p-5">
      <SingleComment
        user={"prax_killer"}
        isReply={false}
        message={"Messi"}
        image={`https://w0.peakpx.com/wallpaper/901/784/HD-wallpaper-lionel-messi-national-team-soccer-messi-2021-argentina-captain-football.jpg`}
      />
      {isRepliesOpen ? (
        <div className="flex flex-col pl-16">
          <span>
            <button
              onClick={replyHandler}
              className="flex flex-row justify-center items-center"
            >
              <AiOutlineMinus className="w-7 h-auto text-gray-500 mr-2" />{" "}
              <span className="text-gray-500 text-sm"> Hide Replies</span>
            </button>
          </span>
          {replies.map((reply) => {
            return (
              <SingleComment
                user={reply.user}
                isReply={true}
                message={reply.message}
                repliedTo={reply.repliedTo}
                image={`https://w0.peakpx.com/wallpaper/901/784/HD-wallpaper-lionel-messi-national-team-soccer-messi-2021-argentina-captain-football.jpg`}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col pl-16">
          <span>
            <button
              className="flex flex-row justify-center items-center"
              onClick={replyHandler}
            >
              <AiOutlineMinus className="w-7 h-auto text-gray-500 mr-2" />{" "}
              <span className="text-gray-500 text-sm">{` View Replies (${replies.length})`}</span>
            </button>
          </span>
        </div>
      )}
    </div>
  );
}

export default Comments;