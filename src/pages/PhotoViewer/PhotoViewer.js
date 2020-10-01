import React from 'react'

import grace1 from '@assets/grace1.jpg'
import grace2 from '@assets/grace2.jpg'
import grace3 from '@assets/grace3.jpg'

const PhotoViewer = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const randomImageKey = getRandomInt(1, 3)

  let imgURL = ''

  if (randomImageKey === 1) {
    imgURL = grace1
  } else if (randomImageKey === 2) {
    imgURL = grace2
  } else {
    imgURL = grace3
  }

  return (
    <img src={imgURL} />
  )
}

export default PhotoViewer
