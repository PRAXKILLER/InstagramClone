import { ADD_IMAGE, GET_IMAGE } from "./image.types";

const initialState = {
  image: [],
};

const ImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE:
        return {
            ...state,
            image : action.payload
        }
    case GET_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default ImageReducer;
