import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_Fail,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_Fail,
  LOGOUT_USER,
} from "../constants/userConstants.js";

import axios from "axios";

const baseUrl = "http://localhost:5000";

const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: LOGOUT_USER });
};

const createUserAction = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/api/v1/users/register`,
      { email, password },
      config
    );

    console.log(data);
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data.user,
    });
  } catch (err) {
    let message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch({
      type: CREATE_USER_Fail,
      payload: message,
    });
  }
};

const loginUserAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "Application/json",
      },
    };

    const { data } = await axios.post(
      `${baseUrl}/api/v1/users/login`,
      { email, password },
      config
    );

    console.log("data", data);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data.user,
    });

    localStorage.setItem("userInfo", JSON.stringify(data.user));
  } catch (err) {
    let message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch({
      type: LOGIN_USER_Fail,
      payload: message,
    });
  }
};

export { createUserAction, loginUserAction, logout };
