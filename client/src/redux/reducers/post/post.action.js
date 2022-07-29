import axios from "axios";

import { ADD_POST, GET_FOLLOWING_POSTS, GET_USER_POSTS } from "./post.types";

export const addPost = (postData) => async (dispatch) => {
  try {
    const post = await axios({
      method: "POST",
      url: "http://localhost:4000/insta/post/add",
      data: postData,
    });

    return dispatch({ type: ADD_POST, payload: post.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getFollowingPosts = () => async (dispatch) => {
  try {
    const followingPosts = await axios({
      method: "GET",
      url: "http://localhost:4000/insta/post/following",
    });

    return dispatch({
      type: GET_FOLLOWING_POSTS,
      payload: followingPosts.data,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
