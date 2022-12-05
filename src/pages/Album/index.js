import React from 'react'
import { useSelector } from 'react-redux'
import { Sticker } from '../../components'
import './style.css'

export default function Album() {
  const stickerData = useSelector(state => state.stickers.stickers)
  console.log(stickerData);

  const renderStickers = () => {
      return(
        stickerData.map((sticker) => {
          return <Sticker name={sticker.name} image={sticker.image} country={sticker.country} stickerId={sticker.stickerId} />
        })
    )
  }

  return (
    <div className='album'>
      <select>
        <option>England</option>
        <option>Brazil</option>
        <option>Wales</option>
      </select>
      {renderStickers()}
      <button>Page Left</button>
      <button>Page Right</button>
    </div>
  )
}
