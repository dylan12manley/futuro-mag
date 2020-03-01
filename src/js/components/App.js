import React from "react";
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import './../../styles/index.css';

const App = () => (
  <>
    <div className="body">
    <Header />
      <h1>body</h1>
      <div className="topAndBottom">
        <div className="topBody">
          <h2>topBody</h2>
        </div>
        <div className="bottomBody">
          <h2>bottomBody</h2>
        </div>
        <div className="topBody">
          <h2>topBody</h2>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default App;
