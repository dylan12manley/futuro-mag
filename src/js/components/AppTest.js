import React from "react";
import ArticleList from "./ArticleList";
import NewArticleForm from "./NewArticleForm";
import Article from './Article'
import Post from "./Post";
import App from "./App";
import './../../styles/index.css';

export default function AppTest() {
  return (
    <>
      <div>
        <ArticleList/ >
        <Article/ >
        <NewArticleForm/ >
        <App />
      </div>
    </>
  );
}
