import { ADD_LIKE, ADD_FOLLOW } from "./types";

export const addLike = () => {
  return { type: ADD_LIKE };
};

export const addFollow = () => {
  return { type: ADD_FOLLOW };
};
