import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import App from "./js/components/App";
import rootReducer from './js/reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import store from './js/store/index'

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    document.getElementById("root")
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./js/components/App', () => {
    render(App);
  });
}
/*eslint-enable */
