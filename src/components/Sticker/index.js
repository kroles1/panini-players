import React from 'react'

export default function Sticker({name, image, stickerId}) {
  return (
    <div>
        {/* <h2>Name: {name}</h2> */}
        <img src={image} alt='Picture of sticker' />
        <p>Sticker id: {stickerId}</p>
    </div>
  )
}
