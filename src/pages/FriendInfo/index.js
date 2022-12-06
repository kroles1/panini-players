import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function FriendInfo() {
  const friendsData = useSelector(state => state.friends.friends)
  const usernameOfUser = useSelector(state => state.user.username)
  console.log(usernameOfUser);
  const [sentEmail, setSentEmail] = useState(false)

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

  const sendNotif = (e) => {
    e.preventDefault()
    axios.post("http://127.0.0.1:5000/trade", {username: usernameOfUser, receiver: friendData.email})
			.then((res) => {
				setSentEmail(true)
			})
			.catch((err) => console.error(err));
  }


  return (
    <>
    <h1>Friends name: {friendData.username}</h1>
    <h3>Duplicates:</h3>
    {renderDuplicates()}
    <h3>Needs:</h3>
    {renderNeeds()}
    <button onClick={sendNotif}>Start trade</button>
    {sentEmail && <p>User notified</p>}
    </>
  )
}
