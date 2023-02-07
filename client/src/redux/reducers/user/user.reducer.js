import {
  GET_A_PARTICULAR_USER,
  GET_MY_SELF,
  DELETE_ACCOUNT,
  UPDATE_DETAILS,
  FOLLOW_A_USER,
  SEARCH_USERS,
} from "./user.types";

const initialState = {
  user: {},
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_A_PARTICULAR_USER:
      return {
        ...state,
      };
    case GET_MY_SELF:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        user: {},
      };
    case UPDATE_DETAILS:
      return {
        ...state,
        user: action.payload,
      };
    case FOLLOW_A_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SEARCH_USERS:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
