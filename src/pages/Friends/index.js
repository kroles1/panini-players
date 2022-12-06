import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FriendItem } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getFriendsData } from '../../actions'

export default function Friends() {
  const friendsData = useSelector(state => state.friends.friends)
  const userCardsStr = useSelector(state => state.user.cards)
  // const friendsList = useSelector(state => state.user.friends)
  console.log(friendsData);
  const userId = useSelector(state => state.user.userId)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userCardsArray = userCardsStr.split(' ')
  // console.log(userCardsArray);
  const userNeeds = userCardsArray.filter(card => {
    let [code, num] = card.split('-')
    return num == 0
  });

  const userDuplicates = userCardsArray.filter(card => {
    let [code, num] = card.split('-')
    return num > 1
  });

  console.log(userNeeds);
  console.log(userDuplicates);

  let friendsNAndD = []

  friendsData.forEach(friend => {
    let friendsCardsArray = friend.cards.split(' ')

    let friendsNeeds = friendsCardsArray.filter(card => {
      let [code, num] = card.split('-')
      return num == 0
    });

    let friendsDuplicates = friendsCardsArray.filter(card => {
      let [code, num] = card.split('-')
      return num > 1
    });

    friendsNAndD.push({id: friend.userId, needs: friendsNeeds, duplicates: friendsDuplicates})
  });

  console.log(friendsNAndD);

  // const friend1CardsArray = friendsData[0].cards.split(' ')
  // console.log(friend1CardsArray);
  
  // userCardsArray.array.forEach(card => {
    
  // });
  
  // for (let card in userCardsArray) {
  //   let [codeU, numU] = card.split('-')
  //   let [codeF, numF] = friend1CardsArray[userCardsArray.indexOf(card)]
  // }

  useEffect(() => {
    dispatch(getFriendsData(userId))
  }, [])

  const renderFriends = () => {
    return(
      friendsData.map((friend) => {
        return <button onClick={() => navigate(friend.path)}><FriendItem username={friend.username} /></button>
      })
  )
}

  return (
    <>
    <button onClick={() => navigate("/dashboard/friends/add")}>+</button>
    <h1>Friends List</h1>
    {renderFriends()}
    </>
  )
}
