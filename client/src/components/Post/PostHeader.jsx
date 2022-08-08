import React from "react";

function PostHeader(props) {

  return (
    <div className="w-full flex flex-row items-center h-14 border-b-2 border-gray-400 py-3 px-5">
      <div className="rounded-full h-8 w-8 overflow-hidden flex justify-center items-center">
        <img
          src={props.profile ? props.profile.location :"https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"}
          alt="profile"
          className="h-auto w-8 min-h-full"
        />
      </div>
      <h1 className="text-lg ml-4">{props.user ? props.user.userName : "UnknownUser"}</h1>
    </div>
  );
}

export default PostHeader;
