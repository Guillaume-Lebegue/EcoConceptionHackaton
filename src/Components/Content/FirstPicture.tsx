import React, { useEffect, useState } from 'react'

import './FirstPicture.css';

const NB_IMAGES = 4;
const WIDTH = [
  1920,
  1280,
  850,
  568
]

const getUrl = (width: number, index: number) => {
  return process.env.PUBLIC_URL + `/random/image-${index}-${width}.jpg`;
}

export default function FirstPicture() {
  const [currentImage, setCurrentImage] = useState<number>();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * NB_IMAGES) + 1;
    setCurrentImage(randomIndex);
  }, []);

  const getPictures = () => {
    if (!currentImage) return null;
    const sources = WIDTH.map(width => {
      return <source key={"imgwidth-" + width} media={`(min-width: ${width}px)`} srcSet={getUrl(width, currentImage)} />
    })
    return <picture className='contain'>
      {sources}
      <img src={getUrl(WIDTH[WIDTH.length - 1], currentImage)} alt="Exposition choosed randomly" />
    </picture>
  }

  return (
    <div className='first-picture'>
      {getPictures()}
      <h1 className='middle-text'><mark>"Nous travaillons à l'émotion&nbsp;<br />pour proposer des pâtisseries inscrites&nbsp;<br />dans la gourmandise et la modernité."&nbsp;</mark></h1>
    </div>
  )
}
