import { combineReducers } from "redux";
import { createUserReducer, loginUserReducer } from "./userReducers";
import { contactAdminReducer } from "./generalReducers";
import { createPostReducer } from "./postReducers";

const rootReducer = combineReducers({
  createUser: createUserReducer,
  loginUser: loginUserReducer,
  contactAdmin: contactAdminReducer,
  createPost: createPostReducer,
});

export default rootReducer;
