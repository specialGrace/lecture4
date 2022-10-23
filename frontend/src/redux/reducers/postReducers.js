import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_Fail,
  CREATE_POST_RESET,
} from "../constants/postConstants.js";

const createPostReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return { loading: true };
    case CREATE_POST_SUCCESS:
      return { loading: false, success: true, post: action.payload };
    case CREATE_POST_Fail:
      return { loading: false, error: action.payload };
    case CREATE_POST_RESET:
      return {};
    default:
      return state;
  }
};

export { createPostReducer };
