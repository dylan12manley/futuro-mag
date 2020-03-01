import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware)
);

export default store;
