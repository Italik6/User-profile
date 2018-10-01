import { TOGGLE_COMMENTS, ADD_COMMENT } from "./types";

export const toggleComments = () => {
  return { type: TOGGLE_COMMENTS };
};

export const addComment = newComment => {
  return { type: ADD_COMMENT, payload: newComment };
};
