import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from './App';
import { HashRouter } from 'react-router-dom';
import storeTest from "./js/store/index";
import AppTest from "./js/components/AppTest";

render(
  <Provider store={storeTest}>
    <HashRouter>
      <App />
      <AppTest />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
