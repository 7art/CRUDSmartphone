export const ModalActionTypes = {
  SHOW_MODAL: "SHOW_MODAL",
  HIDE_MODAL: "HIDE_MODAL",
};

export function showModal() {
  return (dispatch) => {
    return dispatch({
      type: ModalActionTypes.SHOW_MODAL,
    });
  };
}

export function hideModal() {
  return (dispatch) => {
    return dispatch({
      type: ModalActionTypes.HIDE_MODAL,
    });
  };
}
