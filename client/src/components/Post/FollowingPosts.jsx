import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowingPosts } from "../../redux/reducers/post/post.action";
import SmallViewPost from "./SmallViewPost";

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
    <div className="w-full h-full">
      {posts.map((post) => (
        <SmallViewPost image={post.image} description={post.description} />
      ))}
    </div>
  );
}

export default FollowingPosts;
