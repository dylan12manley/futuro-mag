import React from "react";
import List from "./List";
import Form from "./Form";
import './../../styles/index.css';

const App = () => (
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
      </div>
    </div>
  </>
);

export default App;
