import {
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAIL,
} from "../constants/generalActions";
import axios from "axios";

const contactAdminAction =
  (email, name, subject, message) => async (dispatch) => {
    try {
      dispatch({
        type: CONTACT_US_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "Application/json",
        },
      };
      const baseUrl = "http://localhost:5000";

      const { data } = await axios.post(
        `${baseUrl}/api/v1/general/contact`,
        { email, name, subject, message },
        config
      );

      console.log("data", data);
      dispatch({
        type: CONTACT_US_SUCCESS,
        payload: data.contact,
      });
    } catch (err) {
      let message =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      dispatch({
        type: CONTACT_US_FAIL,
        payload: message,
      });
    }
  };

export { contactAdminAction };
