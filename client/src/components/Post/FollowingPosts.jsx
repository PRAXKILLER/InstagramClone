import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowingPosts } from "../../redux/reducers/post/post.action";
import ViewPost from "./ViewPost";

function FollowingPosts(props) {

  return (
    <div className="w-full h-full flex flex-col items-center mb-2">
      {props.posts &&
        props.posts.map((post, index) => (
          <ViewPost
            key={index}
            image={post.image}
            description={post.description}
            user={post.user}
          />
        ))}
    </div>
  );
}

export default FollowingPosts;
