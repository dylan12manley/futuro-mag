import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(el => (
      <li key={el.id}>{el.title}</li>,
      <li key={el.id}>{el.author}</li>,
      <li key={el.id}>{el.publishDate}</li>,
      <li key={el.id}>{el.articleBody}</li>,
      <li key={el.id}>{el.mainImage}</li>,
      <li key={el.id}>{el.otherImage}</li>,
      <li key={el.id}>{el.catagory}</li>
    ))}
  </ul>
);

const ArticleList = connect(mapStateToProps)(ConnectedList);

export default ArticleList;
