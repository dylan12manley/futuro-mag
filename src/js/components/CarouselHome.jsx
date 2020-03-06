import React from 'react'
import Carousel  from 'react-bootstrap/Carousel';
import triangles1 from './../../images/tri1.png'
import futuro1 from './../../images/Futuro1.jpg'
import "./../../styles/carousel1.css"

const featuredArticles = [
  {
    title: 'First Story Title',
    author: 'First Author',
    publishDate: 'March 3rd, 2020',
    articleTeaser: 'This is a story teaser. It could be a brief description of the article or a just the first couple senteneces.',
    mainImage: futuro1
  },
  {
    title: 'Seccond Story Title',
    author: 'Seccond Author',
    publishDate: 'March 2nd, 2020',
    articleTeaser: 'This is a story teaser. It could be a brief description of the article or a just the first couple senteneces.',
    mainImage: triangles1
  }
]

function  CarouselHome(){
  return (
    <>
    <div id='carouselBody'>
    <Carousel>
    {featuredArticles.map((article, index) =>
      <Carousel.Item>
      <div className='carouselImg'>
        <img
          className="d-block w-100 carouselImg"
          src={article.mainImage}
          alt="an image of a article"
        />
      </div>
        <Carousel.Caption>
          <h3>{article.title}</h3>
          <h3>{article.author}</h3>
          <p>{article.publishDate}</p>
          <p>{article.articleTeaser}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )};
    </Carousel>
    </div>
    </>
  );
}

export default CarouselHome
