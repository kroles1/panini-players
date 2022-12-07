import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sticker } from '../../components'
import './style.css'
import { getStickerData } from '../../actions'
import { useNavigate } from 'react-router-dom'

export default function Album() {
  const stickerData = useSelector(state => state.stickers.stickers)
  const userStickerData = useSelector(state => state.user.cards)
  console.log(userStickerData);
  const [country, setCountry] = useState("QAT")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userStickersArray = userStickerData.split(' ')
  let userStickers = []
  userStickersArray.forEach(sticker => {
    let [code, num] = sticker.split('-')
    if (num > 0) {
      userStickers.push(code)
    }
  });
  console.log(userStickers);
  
  useEffect(() => {
    dispatch(getStickerData(country))
    console.log(country);
  },[country])

  const renderStickers = () => {
      return(
        stickerData.map((sticker) => {
          for(let i = 0; i < userStickers.length; i++){
            if(sticker.stickerId == userStickers[i]) {
              console.log(sticker.stickerId);
              return <Sticker name={sticker.name} image={sticker.image} stickerId={sticker.stickerId} />
            }
          }
          console.log(sticker.stickerId, "hidden");
          return(
            <div className="stickerHidden">
              <Sticker  name={sticker.name} image={sticker.image} stickerId={sticker.stickerId} />
            </div>
          ) 
        })
    )
  }

  return (
    <div className='album'>
      <button onClick={() => navigate("/dashboard/confirmTrade")}>Confirm Trade</button>
      <button onClick={() => navigate("/dashboard/addSticker")}>Add Stickers</button>
      <select onChange={e => setCountry(e.target.value)}>
        <option value="QAT">Qatar</option>
        <option value="ECU">Ecuador</option>
        <option value="SEN">Senegal</option>
        <option value="NED">Netherlands</option>
        <option value="ENG">England</option>
        <option value="IRN">Iran</option>
        <option value="USA">United States</option>
        <option value="WAL">Wales</option>
        <option value="ARG">Argentina</option>
        <option value="KSA">Saudi Arabia</option>
        <option value="MEX">Mexico</option>
        <option value="POL">Poland</option>
        <option value="FRA">France</option>
        <option value="AUS">Australia</option>
        <option value="DEN">Denmark</option>
        <option value="TUN">Tunisia</option>
        <option value="ESP">Spain</option>
        <option value="CRC">Costa Rica</option>
        <option value="GER">Germany</option>
        <option value="JPN">Japan</option>
        <option value="BEL">Belgium</option>
        <option value="CAN">Canada</option>
        <option value="MAR">Morocco</option>
        <option value="CRO">Croatia</option>
        <option value="BRA">Brazil</option>
        <option value="SRB">Serbia</option>
        <option value="SUI">Switzerland</option>
        <option value="CMR">Cameroon</option>
        <option value="POR">Portugal</option>
        <option value="GHA">Ghana</option>
        <option value="URU">Uruguay</option>
        <option value="KOR">South Korea</option>
        <option value="FWC">Special</option>
      </select>
      {renderStickers()}
      <button>Page Left</button>
      <button>Page Right</button>
    </div>
  )
}
