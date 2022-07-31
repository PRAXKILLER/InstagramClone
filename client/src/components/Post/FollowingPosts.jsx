import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowingPosts } from "../../redux/reducers/post/post.action";
import ViewPost from "./ViewPost";

function FollowingPosts() {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFollowingPosts()).then((data) => {
      console.log(data.payload.followingPosts);
      setPosts(data.payload.followingPosts);
    });
  }, [localStorage]);
  return (
    <div className="w-full h-full flex flex-col items-center">
      {posts.map((post) => (
        <ViewPost image={post.image} description={post.description} />
      ))}
    </div>
  );
}

export default FollowingPosts;
