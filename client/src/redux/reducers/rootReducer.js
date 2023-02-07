import { combineReducers } from "redux";

import image from "./image/image.reducer";
import auth from './auth/auth.reducer';
import post from './post/post.reducer';
import user from './user/user.reducer'

const rootReducer = combineReducers({
  image,
  auth,
  post,
  user
});

export default rootReducer;
