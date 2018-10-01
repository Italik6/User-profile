import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import modalReducer from "./modalReducer";
import commentsReducer from "./commentsReducer";

export default combineReducers({
  profileInfo: profileReducer,
  commentsList: commentsReducer,
  comments: commentsReducer,
  modal: modalReducer
});
