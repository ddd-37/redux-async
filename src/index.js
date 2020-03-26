import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App/App";
import redcuers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(redcuers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
