import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Post";
import './../../styles/index.css';

const AppTest = () => (
  <>
    <div className="body">
      <div className="topAndBottom">
        <div className="topBody">
          <h2>Articles</h2>
          <List />
        </div>
        <div className="bottomBody">
          <h2>Add a new article</h2>
          <Form />
        </div>
        <div className="topBody">
          <h2>API posts</h2>
          <Post />
        </div>
      </div>
    </div>
  </>
);

export default AppTest;
