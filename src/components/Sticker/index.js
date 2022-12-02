import React from 'react'

export default function Sticker({name, image, country, stickerId}) {
  return (
    <div>
        <h2>Name: {name}</h2>
        <img src={image} alt='Picture of sticker' />
        <p>Sticker id: {stickerId}</p>
        <p>Country {country}</p>
    </div>
  )
}
