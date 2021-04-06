import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reduxLogger from "redux-logger";
import reducers from "./reducers/index";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { getPhones } from "./actions/phones";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducers, applyMiddleware(thunk, reduxLogger));

store.dispatch(getPhones());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
