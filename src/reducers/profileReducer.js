import { ADD_LIKE, ADD_FOLLOW } from "../actions/types";

const initialState = {
  profileInfo: {
    liked: false,
    followed: false
  }
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
    default:
      return state;
  }
}
