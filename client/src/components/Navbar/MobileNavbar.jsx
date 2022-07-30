import React from "react";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineSearch,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BsBell, BsBellFill } from "react-icons/bs";
import { MdExplore, MdOutlineExplore } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import classNames from "classnames";
import AddPost from "../Post/AddPost";

function MobileNavbar() {
  const { type } = useParams();
  console.log(type);

  return (
    <div className="fixed bottom-0 bg-white overflow-scroll w-full flex flex-row h-16 md:hidden border-t-2 border-black p-1">
      <Link
        to={`/home`}
        className="w-1/5 h-full flex justify-center items-center"
      >
        {type === "home" ? (
          <AiFillHome className="w-8 h-8" />
        ) : (
          <AiOutlineHome className="w-8 h-8" />
        )}
      </Link>
      <Link
        to={`/search`}
        className="w-1/5 h-full flex justify-center items-center"
      >
        {type === "search" ? (
          <FaSearch className="w-8 h-8" />
        ) : (
          <AiOutlineSearch className="w-8 h-8" />
        )}
      </Link>
      <Link
        to={`/reels`}
        className="w-1/5 h-full flex justify-center items-center"
      >
        {type === "reels" ? (
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/instagram-reel-4896209-4069491.png"
            className="w-8 h-8"
            alt="reels"
          />
        ) : (
          <img
            src="data:image/png;base64,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"
            className="w-8 h-8"
            alt="reels"
          />
        )}
      </Link>
      <Link
        to={`/notifications`}
        className="w-1/5 h-full flex justify-center items-center"
      >
        {type === "notifications" ? (
          <BsBellFill className="w-8 h-8" />
        ) : (
          <BsBell className="w-8 h-8" />
        )}
      </Link>
      <Link
        to={`/profile`}
        className={classNames("w-1/5 h-full flex justify-center items-center")}
      >
        <div
          className={classNames("rounded-full w-10 h-10 overflow-hidden", {
            "border-black border-4": type === "profile",
          })}
        >
          <img
            src="https://play-lh.googleusercontent.com/cyxm7W-bX6Nf1yW7ChV08ItNy5YZmxYLKi2A-YHufe9oOmTj5wgmSzkS7gTAflukeRg"
            alt="profile"
            className="w-auto h-auto"
          />
        </div>
      </Link>
    </div>
  );
}

export default MobileNavbar;
