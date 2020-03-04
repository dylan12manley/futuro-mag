import constants from './../constants';
import firebase from 'firebase';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);
const articles = firebase.database().ref('articles');

export function addArticle(_title, _author, _publishDate, __articleBody, __mainImage) {
  return () => articles.push({
    title: _title,
    author: _author,
    publishDate: _publishDate,
    articleBody: __articleBody,
    mainImage: __mainImage,
    timeOpen: new Date().getTime()
  });
}
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
