import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import './style.css'

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
        return <p className='stickerCodes'>{sticker}</p>
      })
    )
  }

  const renderGets = () => {
    return(
      get.map((sticker) => {
        return <p className='stickerCodes'>{sticker}</p>
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
    <div className='friendInfoPage'>
      <div className='friendInfo'>
        <h1 className='friendName'>{friendData.username}</h1>
        <div className='stickersBoth'>
          <div className='stickersGive'>
            <h3>Stickers you can give them:</h3>
            {renderGives()}
          </div>
          <div className='stickersGet'>
            <h3>Stickers they can give you:</h3>
            {renderGets()}
          </div>
        </div>
      </div>
    <button className='emailBtn' onClick={sendNotif}>Start trade</button>
    {sentEmail && <p className='emailSent'>User notified</p>}
    </div>
  )
}
