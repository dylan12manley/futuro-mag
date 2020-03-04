import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import storeTest from "./js/store/index";
import AppTest from "./js/components/AppTest";
import { createStore } from 'redux';
import rootReducer from './js/reducers/index';

const store = createStore(rootReducer);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={storeTest}>
      <HashRouter>
        <AppTest />
      </HashRouter>
    </Provider>,
    document.getElementById("root")
  );
};

render(AppTest);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./js/components/AppTest', () => {
    render(AppTest);
  });
}
/*eslint-enable */
