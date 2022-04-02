import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { ebookReducers } from "./redux/Reducers/ebookReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(ebookReducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
