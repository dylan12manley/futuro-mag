import React from "react";
import Art from './Art';
import Home from './Home';
import LandingPage from './LandingPage';
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
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
      <Route path='/art' component={Art} />
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
