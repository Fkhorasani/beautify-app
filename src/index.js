import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import App from "./App";

import registerServiceWorker from "./serviceWorker";

import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
