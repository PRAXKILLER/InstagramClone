import React from "react";
import { AiOutlineHome, AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BsBell, BsBellFill } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import classNames from "classnames";

function LargeNavbar() {
  return <></>;
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
              src="https://thumbs.dreamstime.com/b/reels-logo-219165295.jpg"
              className="w-11 h-11"
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
    </>
  );
}

export default Navbar;
