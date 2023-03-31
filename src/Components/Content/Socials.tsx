import React from 'react'
import './Socials.css';


export default function Socials() {
  return (
    <div className='social'>
      <h2>Retrouvez nous</h2>
      <div className='socContainer'>
        <a href="https://www.facebook.com/"> <img srcSet={process.env.PUBLIC_URL+'/vectoriel/facebook.svg'} alt="Facebook redirect"></img></a>
        <a href="https://www.instagram.com/"> <img srcSet={process.env.PUBLIC_URL+'/vectoriel/instagram.svg'}></img></a>
        <a href="https://www.linkedin.com/">  <img srcSet={process.env.PUBLIC_URL+'/vectoriel/linkedin.svg'}></img></a>
      </div>
    </div>
  )
}
