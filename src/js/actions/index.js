import { ADD_ARTICLE } from "../constants/action-types";
import constants from './../constants';
import firebase from 'firebase';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload }
};
 // If you want to access the state inside the action creator you can add getState in the parameter's list.
// export function getData() {
//   return function(dispatch) {
//   return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(json => {
//       dispatch({ type: "DATA_LOADED", payload: json });
//     });
//   };
// }
