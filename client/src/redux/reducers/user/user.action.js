import axios from "axios";

import {
  GET_A_PARTICULAR_USER,
  GET_MY_SELF,
  DELETE_ACCOUNT,
  UPDATE_DETAILS,
  FOLLOW_A_USER,
  SEARCH_USERS,
} from "./user.types";

export const getAParticularUser = (_id) => async (dispatch) => {
  try {
    const user = await axios({
      method: "GET",
      url: `http://localhost:4000/insta/user/get/${_id}`,
    });

    return dispatch({ type: GET_A_PARTICULAR_USER, payload: user.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getMySelf = () => async (dispatch) => {
  try {
    const user = await axios({
      method: "GET",
      url: "http://localhost:4000/insta/user/",
    });

    return dispatch({ type: GET_MY_SELF, payload: user.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const deleteAccount = () => async (dispatch) => {
  try {
    await axios({
      method: "DELETE",
      url: "http://localhost:4000/insta/user/delete",
    });

    localStorage.removeItem("instaUser");

    window.location.href = "http://localhost:3000/login";
    return dispatch({ type: DELETE_ACCOUNT, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const updateDetails = () => async (dispatch) => {
  try {
    const user = await axios({
      method: "PUT",
      url: "http://localhost:4000/insta/user/update",
    });

    return dispatch({ type: UPDATE_DETAILS, payload: user.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const followUser = (_id) => async (dispatch) => {
  try {
    const user = await axios({
      method: "POST",
      url: `http://localhost:4000/insta/user/follow/${_id}`,
    });

    return dispatch({ type: FOLLOW_A_USER, payload: user.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const searchUsers = (searchString) => async (dispatch) => {
  try {
    const users = await axios({
      method: "GET",
      url: `http://localhost:4000/insta/user/search`,
      data: { searchString },
    });

    return dispatch({ type: SEARCH_USERS, payload: users.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
