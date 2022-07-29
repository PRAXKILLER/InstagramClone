import React from "react";

function PostHeader() {
  return (
    <div className="w-full flex flex-row items-center h-14 border-b-2 border-gray-400 py-3 px-5">
      <div className="rounded-full h-8 w-8 overflow-hidden">
        <img
          src="https://cdn.wallpapersafari.com/80/27/DGyJh9.jpg"
          alt="profile"
          className="h-auto w-8 min-h-full"
        />
      </div>
      <h1 className="text-lg ml-4">prax_killer999</h1>
    </div>
  );
}

export default PostHeader;
