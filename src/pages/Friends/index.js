import React from 'react'
import { FriendItem } from '../../components'

export default function Friends() {

  const renderFriends = () => {
    return(
      <div>
      <FriendItem />
      <FriendItem />
      <FriendItem />
      <FriendItem />
      <FriendItem />
      </div>
  )
}

  return (
    <>
    <button>+</button>
    <h1>Friends List</h1>
    {renderFriends()}
    </>
  )
}
