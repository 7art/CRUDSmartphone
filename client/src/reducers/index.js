import { combineReducers } from "redux";
import phones from "./phones";
import modalReducer from "./modal";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  phones,
  modalReducer,
  form: formReducer,
});
