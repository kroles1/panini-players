import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

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
    axios.post("https://panini-players-backend.onrender.com/trade", {username: usernameOfUser, receiver: publicData.email})
			.then((res) => {
				setSentEmail(true)
			})
			.catch((err) => console.error(err));
  }

  return (
    <>
    <h1>{publicUserData.username}</h1>
    <h3>Cards you can give them:</h3>
    {renderGives()}
    <h3>Cards they can give you:</h3>
    {renderGets()}
    <button onClick={sendNotif}>Start trade</button>
    {sentEmail && <p>User notified</p>} 
    </>
  )
}

