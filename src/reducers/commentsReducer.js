import { TOGGLE_COMMENTS, ADD_COMMENT } from "../actions/types";

const initialState = {
  comments: [],
  commentsList: { isShown: true }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_COMMENTS:
      return {
        ...state,
        isShown: !state.isShown
      };
    case ADD_COMMENT:
      const newComment = action.payload;
      if (state.comments) {
        return {
          ...state,
          comments: [...state.comments, newComment]
        };
      }
    default:
      return state;
  }
}
