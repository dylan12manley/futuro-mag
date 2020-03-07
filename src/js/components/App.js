import React from "react";
import Art from './Art';
import Admin from './Admin';
import Home from './Home';
import LandingPage from './LandingPage';
import ArticleList from './ArticleList';
import './../../styles/index.css';
import Error404 from './Error404';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import constants from './../constants';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
const { c } = constants;

const App = () => (
  <>
    <div>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
      <Route path='/art' component={Art} />
      <Route path='/adminHiddenPage' component={Admin} />
      <Route component={Error404} />
    </Switch>
    </div>
  </>
);

export default App;

// <Route path='/articleList' component={ArticleList} />
