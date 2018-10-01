import { TOGGLE_COMMENTS, ADD_COMMENT } from "../actions/types";

const initialState = {
  comments: [],
  commentsList: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_COMMENTS:
      if (state.isShown) {
        return {
          ...state,
          isShown: false
        };
      } else {
        return {
          ...state,
          isShown: true
        };
      }
    case ADD_COMMENT:
      let newComment = action.payload;
      if (state.comments !== undefined) {
        return {
          ...state,
          comments: [...state.comments, newComment]
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
