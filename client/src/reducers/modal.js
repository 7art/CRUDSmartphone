import { ModalActionTypes } from "../actions/modal";

const initialState = {
  modal: false,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return {
        ...state,
        modal: true,
      };
    case ModalActionTypes.HIDE_MODAL:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
}
