import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sticker } from '../../components'
import './style.css'
import { getStickerData } from '../../actions'

export default function Album() {
  const stickerData = useSelector(state => state.stickers.stickers)
  const userData = useSelector(state => state.user)
  const [country, setCountry] = useState("QAT")

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getStickerData(country))
    console.log(country);
  },[country])

  const renderStickers = () => {
      return(
        stickerData.map((sticker) => {
          return <Sticker name={sticker.name} image={sticker.image} country={sticker.country} stickerId={sticker.stickerId} />
        })
    )
  }

  return (
    <div className='album'>
      <select onChange={e => setCountry(e.target.value)}>
        <option value="QAT">Qatar</option>
        <option value="ENG">England</option>
        <option value="BRA">Brazil</option>
        <option value="WAL">Wales</option>
      </select>
      {renderStickers()}
      <button>Page Left</button>
      <button>Page Right</button>
    </div>
  )
}
