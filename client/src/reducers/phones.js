import { actionTypes } from "../actions/phones";

const initialState = {
  list: [],
  isLoading: true,
};

export default function phones(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PHONE:
      return {
        ...state,
        list: [...state.list, ...action.payload],
        isLoading: false,
      };
    case actionTypes.CREATE_PHONE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case actionTypes.UPDATE_PHONE:
      return {
        ...state,
        list: state.list.map((phone) =>
          phone.id === action.payload.id ? { ...action.payload } : phone
        ),
      };

    case actionTypes.DELETE_PHONE:
      return {
        ...state,
        list: state.list.filter((phone) => phone.id !== action.payload),
      };

    default:
      return { ...state };
  }
}
