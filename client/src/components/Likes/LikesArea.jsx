import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";

function LikesArea(props) {
  function onPress() {
    props.setIsCommentsOpen(true);
    if (props.setIsPostOpen) props.setIsPostOpen(true);
  }

  return (
    <div className="w-full p-3 border-2 border-gray-300">
      <div className="flex justify-start items-center">
        {props.isLiked ? (
          <AiFillHeart className="text-red-700 h-8 w-8" />
        ) : (
          <AiOutlineHeart className="h-8 w-8" />
        )}
        <button onClick={onPress}>
          <TbMessageCircle2 className="h-8 w-8 ml-2" />
        </button>
      </div>
      <div className="my-2 text-lg flex-shrink">
        <h1 className="">
          Liked By{" "}
          <span className="font-bold hover:underline cursor-pointer">
            sharmaanshul
          </span>{" "}
          and <span className="font-bold">69 others</span>
        </h1>
        <h1 className="text-lg font-bold flex flex-row flex-shrink">
          prax_killer<h1 className="font-normal ml-2">{props.description}</h1>
        </h1>
        <h1 className="font-light mt-1">June 8</h1>
      </div>
    </div>
  );
}

export default LikesArea;
