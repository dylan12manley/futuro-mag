import React from "react";
import ArticleList from "./ArticleList";
import NewArticleForm from "./NewArticleForm";
import Article from './Article'
import Post from "./Post";
import App from "./App";
import './../../styles/index.css';

export default function Admin() {
  return (
    <>
      <div>
        <ArticleList/ >
        <NewArticleForm/ >
        <Article />
      </div>
    </>
  );
}
