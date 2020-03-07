import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import AppTest from "./js/components/AppTest";
import rootReducer from './js/reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
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
