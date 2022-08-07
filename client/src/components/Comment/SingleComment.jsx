import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMinus } from "react-icons/ai";

function SingleComment(props) {

    const [isLiked, setIsLiked] = useState(true);
  return (
    <>
      <div className="flex flex-row justify-between items-baseline">
        <div className="flex flex-row py-3">
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <img
              src={props.image}
              alt="profile"
              className="h-auto w-full min-h-full min-w-full"
            />
          </div>
          <div className="flex flex-col flex-wrap">
            <div className="flex flex-row flex-wrap">
            <h1 className="font-bold ml-4 mr-1 flex flex-row justify-start">{props.user}</h1>
            <div className="flex flex-row flex-wrap">
              {props.isReply && <h1 className="text-blue-500 ml-1 font-normal">
                @{props.repliedTo}
              </h1>}
              <h1 className="font-normal ml-1">{props.message}</h1>
            </div>

            </div>
            
            <div className="flex flex-row my-2 text-sm">
              <span className="text-gray-500 mx-1">7 w</span>
              <span className="text-gray-500 mx-1">4 Likes</span>
              <span className="text-gray-500 mx-1">
                <button>Reply</button>
              </span>
            </div>
          </div>
          <div></div>
        </div>
        {isLiked ? (
          <AiFillHeart className="text-red-600" />
        ) : (
          <AiOutlineHeart />
        )}
      </div>
    </>
  );
}

export default SingleComment;
