import React from "react";

export default function ProfileSmallScreens() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="">
          <img
            className="rounded-full w-20 h-20 mx-2 my-2"
            src="data:image/jpeg;base64,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"
            alt="Profile Picture"
          />
        </div>
        <div className="m-2 pl-1">
          <div className="flex flex-col">
            <ul className="flex flex-row mb-4">
              <li className="mx-3">
                {" "}
                <div className="font-bold inline">10</div>{" "}
                <div className="inline"> posts </div>
              </li>
              <li className="mx-3">
                <div className="font-bold inline">100</div>{" "}
                <div className="inline"> followers</div>
              </li>
              <li className="mx-3">
                <div className="font-bold inline">100</div>{" "}
                <div className="inline"> following</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-2 my-1">
        <div>Name of the User</div>
        <div>Description/Bio</div>
      </div>
      <div>
        <button className="border-2 rounded mx-2 my-1 px-36 whitespace-nowrap">
          <div className="font-medium"> Edit Profile </div>
        </button>
      </div>
      <div>
        <p> </p>
      </div>
    </div>
  );
}
