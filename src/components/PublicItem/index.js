import React from 'react'
import './style.css'

export default function PublicItem({ username }) {
  return (
    <div>
        <h2 className='publicUsername'>{username}</h2>
    </div>
  )
}
