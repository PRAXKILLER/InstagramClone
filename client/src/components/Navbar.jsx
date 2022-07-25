import React from "react";
import { AiOutlineHome, AiFillHome, AiOutlineSearch, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BsBell, BsBellFill, BsPlusSquare } from "react-icons/bs";
import {MdExplore,MdOutlineExplore} from 'react-icons/md'
import { useParams, Link } from "react-router-dom";
import classNames from "classnames";

function LargeNavbar() {
  const { type } = useParams();
  return (
    <>
      <div className="items-center flex-row justify-between hidden md:flex w-full h-16 my-4 border-b-2 border-gray-200">
        <Link to={`/home`} className="flex flex-row items-center justify-center w-1/3 h-full p-4">
          <img
            src="data:image/png;base64,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"
            className="w-auto h-8"
            alt="Instagram"
          />
        </Link>
        <div className="w-2/4">
          <div className="flex justify-center items-center">
            <div className="p-2 h-9 rounded-l-md bg-gray-200 flex justify-center items-center">
              <AiOutlineSearch className="w-auto h-6 text-gray-400" />
            </div>
            <input
              id="Search"
              type="text"
              placeholder="Search"
              className="px-2 py-1 peer bg-gray-200 w-1/2 rounded-r-md text-lg focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-row w-2/5">
          <Link
            to={`/home`}
            className="h-full flex justify-center items-center mx-3"
          >
            {type === "home" ? (
              <AiFillHome className="w-7 h-7" />
            ) : (
              <AiOutlineHome className="w-7 h-7" />
            )}
          </Link>
          <Link
            to={`/messages`}
            className="h-full flex justify-center items-center mx-3"
          >
            <div className="w-7">
            {type === "messages" ? (
              <img
                src="https://icons-for-free.com/download-icon-facebook+messenger+icon-1320186683283341836_256.png"
                
                alt="message"
                className="w-auto h-7"
              />
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6yLml5pw_-CaZhCAZlNzdLU685WbtnKqOOIMTIS7a1vzSgB9GfpaBPYliDjCiLtw_Vg&usqp=CAU"
                alt="message"
                className="w-auto h-7"
              />
            )}
            </div>
          </Link>
          <Link
            to={`/post`}
            className="h-full flex justify-center items-center mx-3"
          >
            {type === "post" ? (
              <BsPlusSquare className='w-auto h-7' />
            ) : (
              <BsPlusSquare className='w-auto h-7' />
            )}
          </Link>
          <Link
            to={`/explore`}
            className="h-full flex flex-row justify-center items-center mx-3"
          >
            {type === "explore" ? (
              <MdExplore className='w-auto h-8'/>
            ) : (
              <MdOutlineExplore className='w-auto h-8'/>
            )}
          </Link>
          <Link
            to={`/notifications`}
            className=" h-full flex justify-center items-center mx-3"
          >
            {type === "notifications" ? (
              <AiFillHeart className="w-7 h-7" />
            ) : (
              <AiOutlineHeart className="w-7 h-7" />
            )}
          </Link>
          <Link
            to={`/profile`}
            className={classNames(
              "h-full flex justify-center items-center mx-3"
            )}
          >
            <div
              className={classNames("rounded-full w-8 h-8 overflow-hidden", {
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
      </div>
    </>
  );
}

function MobileNavbar() {
  const { type } = useParams();
  console.log(type);

  return (
    <>
      <div className="fixed bottom-0 w-full flex flex-row h-16 md:hidden border-t-2 border-black p-1">
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
          className={classNames(
            "w-1/5 h-full flex justify-center items-center"
          )}
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
    </>
  );
}

function Navbar() {
  return (
    <>
      <MobileNavbar />
      <LargeNavbar />
    </>
  );
}

export default Navbar;
