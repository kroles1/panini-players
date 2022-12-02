import React from 'react'
import { Sticker } from '../../components'

export default function Album() {

  const renderStickers = () => {
      return(
        <div>
        <Sticker/>
        <Sticker/>
        <Sticker/>
        <Sticker/>
        <Sticker/>
        </div>
    )
  }

  return (
    <div>
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
