import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sticker } from '../../components'
import './style.css'
import { getStickerData } from '../../actions'
import { useNavigate } from 'react-router-dom'

export default function Album() {
  const stickerData = useSelector(state => state.stickers.stickers)
  const userData = useSelector(state => state.user)
  console.log(stickerData);
  const [country, setCountry] = useState("QAT")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(getStickerData(country))
    console.log(country);
  },[country])

  const renderStickers = () => {
      return(
        stickerData.map((sticker) => {
          return <Sticker name={sticker.name} image={sticker.image} stickerId={sticker.stickerId} />
        })
    )
  }

  return (
    <div className='album'>
      <button onClick={() => navigate("/dashboard/confirmTrade")}>Confirm Trade</button>
      <button onClick={() => navigate("/dashboard/addSticker")}>Add Stickers</button>
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
