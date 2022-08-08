import { ADD_POST, GET_FOLLOWING_POSTS, GET_USER_POSTS } from "./post.types";

const initialState = {
  followingPosts: [],
  userPosts: [],
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        userPosts: [...state.userPosts, action.payload],
      };
    case GET_FOLLOWING_POSTS:
      return {
        ...state,
        followingPosts: action.payload,
      };
    case GET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default PostReducer
