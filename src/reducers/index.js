import { combineReducers } from "redux";
import profileReducer from "./profileReducer";

export default combineReducers({
  profileInfo: profileReducer,
  commentsList: profileReducer,
  modal: profileReducer,
  comments: profileReducer
});
