import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainArticleFeed from './MainArticleFeed'
import AdColumn from './AdColumn'
import CarouselHome from './CarouselHome'
import { Col, Row } from 'react-bootstrap'

function Home(){
  return (
  <div id='home'>
    <Header/>
    <CarouselHome/>
    <Row>
      <Col>
        <MainArticleFeed/>
      </Col>
      <Col>
        <AdColumn/>
      </Col>
    </Row>
    <Footer/>
  </div>
  );
}


export default Home;
