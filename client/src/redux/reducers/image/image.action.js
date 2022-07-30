import axios from 'axios';

import {ADD_IMAGE, GET_IMAGE} from './image.types'

export const addImage = (imageData)=> async(dispatch) => {
    try {
        const image = await axios({
            method : "POST",
            url : "http://localhost:4000/insta/image/add",
            data : imageData,
            headers: { "Content-Type": "multipart/form-data" },
        })

        return dispatch({type : ADD_IMAGE, payload : image.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const getImage = (_id) => async (dispatch) => {
    try {
      const image = await axios({
        method: "GET",
        url: `http://localhost:4000/insta/image/get/${_id}`,
      });
  
      return dispatch({ type: GET_IMAGE, payload: image.data });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };