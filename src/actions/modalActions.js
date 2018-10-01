import { SHOW_MODAL, HIDE_MODAL } from "./types";

export const openModal = () => {
  return { type: SHOW_MODAL };
};

export const closeModal = () => {
  return { type: HIDE_MODAL };
};
