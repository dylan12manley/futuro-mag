import React from "react";
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import './../../styles/index.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import constants from './../constants';
import { Switch, Route } from 'react-router-dom';
const { c } = constants;

const App = () => (
  <>
    <div className="body">
    <Switch>
    <Header />
    <Footer />
    </Switch>
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
    </div>
  </>
);

export default App;
