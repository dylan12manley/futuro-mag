import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import tyler from './../../images/tyler.jpg';
import kenith from './../../images/kenith.jpg';
import rick from './../../images/RickFuturo.jpg';
import stephen1 from './../../images/stephen1.jpg';
import "./../../styles/mainArticlesFeed.css"

const fullArticlesList = [
  {
    title: 'Why is Rick so Sick, fo Real tho?',
    author: 'Joey P',
    publishDate: 'Febuary 19, 2020',
    articleTeaser: "YO , look Rick and Michelle are like Futuro's  favorite people besides Elon and Grimes lol. Wait Why? Because self actualization isn't even a fucking thought , It just is mothafuckafucking thing. Like just waking up , opening your eyes and just doing shit , no negative self talk , no barriers , no fucks given.",
    mainImage: rick
  },
  {
    title: 'Kenneth Cappello’s Photography is Flithy',
    author: 'Joey P',
    publishDate: 'Febuary 19th, 2020',
    articleTeaser: 'Kenneth Cappelo’s photography makes me feel a certain type of way , I think its the way he captures the artist in there natural essence but also makes them look dope as fuck. You have have cunt’s take lame pictures of you because they be kinda hating on the Low lol , That’s not Kenneth Cappelo , he’s def not a hater with camera. He’s wants to capture your energy and see you win , gotta love a mothafucka like that. Can def see why the stars love him. Tip , don’t give mofo’s the camera that aint trying to see you win. Real Talk.',
    mainImage: kenith
  },
  {
    title: 'Stephen Gibbs Brain is Melting',
    author: 'Joey P',
    publishDate: 'Febuary 19th, 2020',
    articleTeaser: 'Is it me or is Stephen Gibbs really into Psychedelics or maybe he’s just a trippy dude but either way his work has a fucking place here.  The fact that him and the Homey trippy Redd hooked up for and album cover is ridiculously cool and trippy unto itself. These first few artist that we feature in Art now where not going to say too much about because there work speaks fr itself. Have a tab , put on some Nicholas Jarr and watch his world come to life.',
    mainImage: stephen1
  },
  {
    title: 'Third Story Title',
    author: 'Third Author',
    publishDate: 'March 3rd, 2020',
    articleTeaser: 'This is a story teaser. It could be a brief description of the article or a just the first couple senteneces.',
    mainImage: tyler
  },
  {
    title: 'Fourth Story Title',
    author: 'Fourth Author',
    publishDate: 'March 2nd, 2020',
    articleTeaser: 'This is a story teaser. It could be a brief description of the article or a just the first couple senteneces.',
    mainImage: tyler
  }
]

function MainArticleFeed(){
  return (
  <>
  <div>
  <div className="articleFeed">

  <div className="articlesAvailableDiv">
  <h1 style={{fontSize: "40px", fontWeight:"700", paddingLeft: "7.5%"}}>Complete News Feed </h1>
  {fullArticlesList.map((article, index) =>
    <Card className="cardClass">
    <div className='cardHeader'>
    <Row>
      <Col><h5 className='cardTitle'>{article.title}</h5></Col>
      <Col>
        <h6 className='cardTitleB'>{article.author}
        <span className='publishDate'>{article.publishDate}</span></h6>
      </Col>
    </Row>
    </div>
      <Card.Img className="cardImg" src={article.mainImage} alt="The article's main image." />
      <Card.ImgOverlay>
        <Card.Text>
          <div className="articleSubtitle" >
          <p className='ArticleTeaserOnCard'>{article.articleTeaser}</p>
          </div>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}
  </div>
  </div>
  </div>
  </>
);
}

export default MainArticleFeed;
