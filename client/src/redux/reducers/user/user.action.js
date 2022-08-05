import axios from "axios";

import { GET_A_PARTICULAR_USER } from "./user.types";

export const getAParticularUser = (_id) => async(dispatch) => {
    try {
        const user = await axios({
            method: "GET",
            url: `http://localhost:4000/insta/user/get/${_id}`,
          });

        return dispatch({ type: GET_A_PARTICULAR_USER, payload: user.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}