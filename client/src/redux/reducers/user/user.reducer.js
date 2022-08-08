import { GET_A_PARTICULAR_USER } from "./user.types";

const initialState = {
  user: {},
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_A_PARTICULAR_USER:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer