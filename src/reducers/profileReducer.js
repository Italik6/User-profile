import {
  ADD_LIKE,
  SHOW_MODAL,
  HIDE_MODAL,
  ADD_FOLLOW,
  TOGGLE_COMMENTS,
  ADD_COMMENT
} from "../actions/types";

const initialState = {
  profileInfo: {},
  comments: [],
  commentsList: true,
  modal: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_LIKE:
      if (state.liked) {
        return {
          ...state,
          likes: state.likes - 1,
          liked: false
        };
      } else {
        return {
          ...state,
          likes: state.likes + 1,
          liked: true
        };
      }
    case ADD_FOLLOW:
      if (state.followed) {
        return {
          ...state,
          followers: state.followers - 1,
          followed: false
        };
      } else {
        return {
          ...state,
          followers: state.followers + 1,
          followed: true
        };
      }
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
        window.scrollTo(0, 0);
        return {
          ...state,
          comments: [newComment, ...state.comments]
        };
      } else {
        return state;
      }
    case SHOW_MODAL:
      return {
        ...state,
        isOpen: true
      };
    case HIDE_MODAL:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
}
