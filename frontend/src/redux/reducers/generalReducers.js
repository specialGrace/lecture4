import {
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAIL,
  CONTACT_US_RESET,
} from "../constants/generalActions";

const contactAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_US_REQUEST:
      return { loading: true };
    case CONTACT_US_SUCCESS:
      return { loading: false, success: true, contact: action.payload };
    case CONTACT_US_FAIL:
      return { loading: false, error: action.payload };
    case CONTACT_US_RESET:
      return {};
    default:
      return state;
  }
};

export { contactAdminReducer };
