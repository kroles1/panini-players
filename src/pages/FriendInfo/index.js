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
  
  // Get and Give
  const userStickersString = useSelector(state => state.user.cards)

  const userStickersArray = userStickersString.split(' ')
  let userNeeds = []
  let userDuplicates = []
  userStickersArray.forEach(sticker => {
    let [code, num] = sticker.split('-')
    if (num == 0) {
      userNeeds.push(code)
    } else if (num > 1) {
      userDuplicates.push(code)
    }
  });

  const friendStickersArray = friendData.cards.split(' ')
  let friendNeeds = []
  let friendDuplicates = []

  friendStickersArray.forEach(sticker => {
    let [code, num] = sticker.split('-')
    if (num == 0) {
      friendNeeds.push(code)
    } else if (num > 1) {
      friendDuplicates.push(code)
    }
  });

  let give = []
  let get = []

  friendNeeds.forEach(sticker => {
    userDuplicates.forEach(dup => {
      if(dup == sticker) {
        give.push(dup)
      }
    })
  })

  friendDuplicates.forEach(sticker => {
    userNeeds.forEach(need => {
      if(need == sticker) {
        get.push(need)
      }
    })
  })

  const renderGives = () => {
    return(
      give.map((sticker) => {
        return <p>{sticker}</p>
      })
    )
  }

  const renderGets = () => {
    return(
      get.map((sticker) => {
        return <p>{sticker}</p>
      })
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
    <h1>{friendData.username}</h1>
    <h3>Cards you can give them:</h3>
    {renderGives()}
    <h3>Cards they can give you:</h3>
    {renderGets()}
    <button onClick={sendNotif}>Start trade</button>
    {sentEmail && <p>User notified</p>}
    </>
  )
}
