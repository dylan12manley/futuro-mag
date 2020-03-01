import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
// import logo from './logo.svg';
// import './styles/App.css';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render(){
    return (
      <div id='bodyDiv'>
        <div id='noiseImg'>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={Error404} />
          </Switch>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
