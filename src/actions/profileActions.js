import {
  ADD_LIKE,
  ADD_FOLLOW,
  TOGGLE_COMMENTS,
  SHOW_MODAL,
  HIDE_MODAL,
  ADD_COMMENT
} from "./types";

export const addLike = () => {
  return { type: ADD_LIKE };
};

export const addFollow = () => {
  return { type: ADD_FOLLOW };
};

export const toggleComments = () => {
  return { type: TOGGLE_COMMENTS };
};

export const openModal = () => {
  return { type: SHOW_MODAL };
};

export const closeModal = () => {
  return { type: HIDE_MODAL };
};

export const addComment = (newComment) => {
  return { type: ADD_COMMENT, payload: newComment };
};