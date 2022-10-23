import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE
} from "../constants/postConstants";
import axios from "axios";

const baseUrl = "https://localhost:5000";

const createPostAction =
  (length, name, image, name, gender, location, created) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CREATE_POST_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "Application/json",
        },
      };

      const { data } = await axios.get(
        `${baseUrl}/api/v1/cartoon`,
        { length, name, image, name, gender, location, created },
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
      dispatch({
        type: CREATE_POST_FAILURE,
        payload: message,
      });
    }
  };

export { createPostAction };
