import React, { useState } from 'react'

export default function Sticker({name, image, stickerId, rarity, owned}) {
  const [showStars, setShowStars] = useState(false)

  const renderRarity = () => {
    const array = new Array(rarity)
    array.fill(1)
    console.log(array);
    return(
      array.map(star => {
        return <li><img className='stars' src="https://pngimg.com/uploads/star/star_PNG41513.png" style={showStars ? {visibility: "visible"} : {visibility: "hidden"}} /></li>
      })
    )
  }

  return (
    <div onMouseEnter={() => setShowStars(true)} onMouseLeave={() => setShowStars(false)}>
        {/* <h2>Name: {name}</h2> */}
        <img src={image} alt='Picture of sticker' />
        <p style={!owned ? {visibility: "visible"} : {visibility: "hidden"}} className='stickerId'>{stickerId}</p>
        <ul className='starsContainer'>
          {renderRarity()}
        </ul>
    </div>
  )
}
