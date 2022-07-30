import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Comments from "../Comment/Comments";
import AddComment from "../Comment/AddComment";
import LikesArea from "../Likes/LikesArea";
import PostHeader from "./PostHeader";

function LargeViewPost() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 hidden lg:flex"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-screen items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-5/6 h-full transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="w-full h-full flex flex-row justify-center items-center">
                    <div className="w-1/2 h-full bg-black flex justify-center items-center overflow-hidden">
                      <img
                        src="https://www.teahub.io/photos/full/6-60922_fc-barcelona-wallpaper-messi.png"
                        alt="postImage"
                        className="w-11/12 h-auto"
                      />
                    </div>
                    <div className="w-1/2 h-full flex flex-col justify-start">
                      <PostHeader />
                      <Comments />
                      <LikesArea isLiked={isLiked} />
                      <AddComment />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default LargeViewPost;
