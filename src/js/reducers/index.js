import constants from './../constants';
import { ADD_ARTICLE } from "../constants/action-types";
// import { DATA_LOADED } from "../constants/action-types";
// import { combineReducers } from 'redux';
//
// const { c } = constants;

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
  // if (action.type === DATA_LOADED) {
  //   return Object.assign({}, state, {
  //     remoteArticles: state.remoteArticles.concat(action.payload)
  //   });
  // }
