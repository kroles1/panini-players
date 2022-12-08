import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import './style.css'

export default function PublicUserInfo() {
  const publicData = useSelector(state => state.publicUsers.publicUsers)
  const usernameOfUser = useSelector(state => state.user.username)
  console.log(usernameOfUser);
  const [sentEmail, setSentEmail] = useState(false)

  const params = useParams()
  const publicUserId = params.user
  console.log(publicUserId);

  const publicUserData = publicData.filter((person) => person.userId == publicUserId)[0]
  console.log(publicData);
  console.log(publicUserData);
  
  // Get and Give
  const userStickersString = useSelector(state => state.user.cards)
// console.log(userStickersString);
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
  // console.log(userStickersArray);


  const publicStickersArray = publicUserData.cards.split(' ')
  // console.log(publicStickersArray);
  let publicNeeds = []
  let publicDuplicates = []
  

  publicStickersArray.forEach(sticker => {
    let [code, num] = sticker.split('-')
    if (num == 0) {
      publicNeeds.push(code)
    } else if (num > 1) {
      publicDuplicates.push(code)
    }
  });

  // console.log(publicNeeds);
  // console.log(publicDuplicates);

  let give = []
  let get = []

  publicNeeds.forEach(sticker => {
    userDuplicates.forEach(dup => {
      if(dup == sticker) {
        give.push(dup)
      }
    })
  })

  // console.log(give);

  publicDuplicates.forEach(sticker => {
    userNeeds.forEach(need => {
      if(need == sticker) {
        get.push(need)
      }
    })
  })
  // console.log(get);

  const renderGives = () => {
    return(
      give.map((sticker) => {
        return <p className='stickerCodesUser'>{sticker}</p>
      })
    )
  }

  const renderGets = () => {
    return(
      get.map((sticker) => {
        return <p className='stickerCodesUser'>{sticker}</p>
      })
    )
  }

  const sendNotif = (e) => {
    e.preventDefault()
    axios.post("http://127.0.0.1:5000/trade", {username: usernameOfUser, receiver: publicUserData.email})
			.then((res) => {
				setSentEmail(true)
			})
			.catch((err) => console.error(err));
  }

  return (
    <div className='userInfoPage'>
      <div className='userInfo'>
        <h1 className='userName'>{publicUserData.username}</h1>
        <div className='stickersBothUser'>
          <div className='stickersGiveUser'>
            <h3>Stickers you can give them:</h3>
              {renderGives()}
          </div>
          <div className='stickersGetUser'>
            <h3>Stickers they can give you:</h3>
            {renderGets()}
          </div>
        </div>
      </div>
    <button className='emailBtnUser' onClick={sendNotif}>Start trade</button>
    {sentEmail && <p className='emailSentUser'>User notified</p>} 
    </div>
  )
}

