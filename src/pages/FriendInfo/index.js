import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function FriendInfo() {
  const friendsData = useSelector(state => state.friends.friends)

  const params = useParams()
  const friendId = params.friend

  const friendData = friendsData.filter((person) => person.userId == friendId)[0]
  console.log(friendData);
  

  const renderDuplicates = () => {
    return(
      <div>
        <p>Player 1</p>
        <p>Player 2</p>
        <p>Player 3</p>
      </div>
    )
  }

  const renderNeeds = () => {
    return(
      <div>
        <p>Player 1</p>
        <p>Player 2</p>
        <p>Player 3</p>
      </div>
    )
  }


  return (
    <>
    <h1>Friends name: {friendData.username}</h1>
    <h3>Duplicates:</h3>
    {renderDuplicates()}
    <h3>Needs:</h3>
    {renderNeeds()}
    <button>Start trade</button>
    </>
  )
}
