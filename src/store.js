import { createStore, compose } from "redux";
import rootReducer from "./reducers";
import profileInfo from "./data/profileData";
import comments from "./data/comments";

const defaultState = {
  profileInfo,
  comments,
  commentsList: { isShown: true },
  modal: { isOpen: false }
};

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    // Add redux devtools for chrome browser
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
