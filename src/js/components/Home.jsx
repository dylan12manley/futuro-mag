import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainArticleFeed from './MainArticleFeed'
import AdColumn from './AdColumn'
import NavBar from './NavBar2'
import CarouselHome from './CarouselHome'
import { Col, Row } from 'react-bootstrap'

function Home(){
  return (
  <div id='home'>
    <div id='navBar'>
      <NavBar/>
    </div>
    <Header/>
    <CarouselHome/>
    <Row>
      <Col xs={8} >
        <MainArticleFeed/>
      </Col>
      <Col md={4} >
        <AdColumn/>
      </Col>
    </Row>
    <Footer/>
  </div>
  );
}


export default Home;
