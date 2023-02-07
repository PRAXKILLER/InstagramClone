import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

import AddComment from "../Comment/AddComment";
import Comments from "../Comment/Comments";
import LikesArea from "../Likes/LikesArea";
import PostHeader from "./PostHeader";

import { getImage } from "../../redux/reducers/image/image.action";
import { getAParticularUser } from "../../redux/reducers/user/user.action";
import { useDispatch } from "react-redux";

function ViewPost(props) {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [image, setImage] = useState({});
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();

  const dispatch = useDispatch();

  function onPress() {
    setIsCommentsOpen(false);
  }

  useEffect(() => {
    dispatch(getImage(props.image)).then((data) => {
      setImage(data.payload.image);
    });
    dispatch(getAParticularUser(props.user)).then((data) => {
      setUser(data.payload.user);
      dispatch(getImage(data.payload.user.profilePic)).then((data) => {
        setProfile(data.payload.image);
      });
    });
  }, []);

  return (
    <>
      <div className="w-full md:w-11/12 lg:w-1/3 h-full p-2 border border-black flex justify-center items-center">
        <div className="flex flex-col w-full h-full">
          {isCommentsOpen ? (
            <div className="flex flex-col w-full h-full">
              <div className="flex flex-row justify-between items-center">
                <button onClick={onPress}>
                  <BiArrowBack className="w-7 h-7" />
                </button>
                <h1 className="text-xl">Comments</h1>
                <BsThreeDots className="w-7 h-7" />
              </div>
              <Comments />
            </div>
          ) : (
            <div className="w-full h-full">
              <PostHeader user={user} profile={profile} />
              <div className="h-full w-full bg-black flex justify-center">
                <img
                  src={image.location}
                  alt="postImage"
                  className="w-auto h-full"
                />
              </div>
              <LikesArea
                setIsCommentsOpen={setIsCommentsOpen}
                description={props.description}
              />
              <AddComment />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ViewPost;
