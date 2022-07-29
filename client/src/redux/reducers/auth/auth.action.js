import axios from "axios";

// redux types
import { SIGN_OUT, SIGN_IN, SIGN_UP } from "./auth.types";

export const signIn = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `http://localhost:4000/insta/auth/signin`,
      data: userData,
    });

    localStorage.setItem(
      "instaUser",
      JSON.stringify({ token: User.data.token })
    );

    window.location.href = 'http://localhost:3000/home'

    return dispatch({ type: SIGN_IN, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signUp = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `http://localhost:4000/insta/auth/signup`,
      data: userData ,
    });

    localStorage.setItem(
      "instaUser",
      JSON.stringify({ token: User.data.token })
    );

    window.location.href = 'http://localhost:3000/home'

    return dispatch({ type: SIGN_UP, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    localStorage.removeItem("instaUser");

    window.location.href = "http://localhost:3000/login";

    return dispatch({ type: SIGN_OUT, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};