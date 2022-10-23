import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,

} from "../constants/PostConstants.js";

import {logout} from './userActions.js'

import axios from "axios";

const baseUrl = "http://localhost:5000";

const createPostAction = (title, body, image) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_POST_REQUEST,
    });
      
      const {loginUser:{userInfo}}=getState()
    const config = {
      headers: {
            "Content-Type": "Application/json",
          "authorization":`Bearer ${userInfo.token}`
      },
    };
    const { data } = await axios.post(
      `${baseUrl}/api/v1/posts`,
      { title, body, image },
      config
    );
    console.log(data);
    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: data.post,
    });
  } catch (err) {
    let message =
      err.response && err.response.data.message
        ? err.response.data.message
              : err.message;
      if (message === 'Invalid token, Not authorized' || /JWT/.test(message)) {
        //   dispatch logout
        console.log('logout')
        dispatch(logout())
      }
    dispatch({
      type: CREATE_POST_FAIL,
      payload: message,
    });
  }
};


export { createPostAction};
