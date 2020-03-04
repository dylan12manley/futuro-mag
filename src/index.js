import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import storeTest from "./js/store/index";
import AppTest from "./js/components/AppTest";
import { createStore } from 'redux';
import rootReducer from './js/reducers/index';

render(
  <Provider store={storeTest}>
    <HashRouter>
      <AppTest />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
