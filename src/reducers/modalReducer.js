import { SHOW_MODAL, HIDE_MODAL } from "../actions/types";

const initialState = {
  modal: false
};

export default function(state = initialState, action) {
  switch (action.type) {
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
