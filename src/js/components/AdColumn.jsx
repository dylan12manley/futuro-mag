import React from "react"
import Image from 'react-bootstrap/Image'
import dior from './../../images/dior.jpg'
import keene from './../../images/keene.jpg'
// import "../styles/AdColumn.css"

const adList = [
  {
    title: 'ad number 1',
    url: 'https://www.dior.com/en_us',
    img: dior
  },
  {
    title: 'ad number 2',
    url: 'https://www.keane-eyes.com/',
    img: keene
  }
]

function AdColumn(){
  return (
  <>
  <div className="adColumnBody">
    {adList.map((ad, index) =>
    <a href={ad.url}>
      <Image src={ad.img}/>
    </a>
  )}
  </div>
  </>
);
}

export default AdColumn;
