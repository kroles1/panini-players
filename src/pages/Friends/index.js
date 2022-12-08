import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FriendItem } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getFriendsData } from '../../actions'
import './style.css'

export default function Friends() {
  const friendsData = useSelector(state => state.friends.friends)
  const userCardsStr = useSelector(state => state.user.cards)
  console.log(friendsData);
  const userId = useSelector(state => state.user.userId)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userCardsArray = userCardsStr.split(' ')
  let userNeeds = []
  let userDuplicates = []
  userCardsArray.forEach(card => {
    let [code, num] = card.split('-')
    if (num == 0) {
      userNeeds.push(code)
    } else if (num > 1) {
      userDuplicates.push(code)
    }
  });

  console.log(userNeeds);
  console.log(userDuplicates);

  let friendsNAndD = []
  

  friendsData.forEach(friend => {
    let friendsNeeds = []
    let friendsDuplicates = []
    let friendsCardsArray = friend.cards.split(' ')

    friendsCardsArray.forEach(card => {
      let [code, num] = card.split('-')
      if (num == 0) {
        friendsNeeds.push(code)
      } else if (num > 1) {
        friendsDuplicates.push(code)
      }
    });

    friendsNAndD.push({id: friend.userId, needs: friendsNeeds, duplicates: friendsDuplicates})
  });

  console.log(friendsNAndD);

  let trades = []

  friendsNAndD.forEach(friend => {
    let give = []
    let get = []
    friend.needs.forEach(card => {
      userDuplicates.forEach(dup => {
        if(dup == card) {
          give.push(dup)
        }
      })
    })

    friend.duplicates.forEach(card => {
      userNeeds.forEach(need => {
        if(need == card) {
          get.push(need)
        }
      })
    })
    trades.push({id: friend.id, give: give, get: get})
  })

  console.log(trades);

  let friendsToTradeWith = []

  trades.forEach(friend => {
    if(friend.give.length > 0 && friend.get.length > 0){
      friendsToTradeWith.push(friend.id)
    }
  })

  console.log(friendsToTradeWith);

  useEffect(() => {
    dispatch(getFriendsData(userId))
  }, [])

  const renderFriends = () => {
    return(
        friendsData.map((friend) => {
          for(let i = 0; i < friendsToTradeWith.length; i++){
            if (friend.userId == friendsToTradeWith[i]){
            return <button className="trade" onClick={() => navigate(friend.path)}><FriendItem username={friend.username} /></button>
            }
          }
          return <button onClick={() => navigate(friend.path)}><FriendItem username={friend.username} /></button>
        })
  )
}

  return (
    <>
    <div className='friends'>
      <button onClick={() => navigate("/dashboard/friends/add")} className="addFriendButton">Add friend</button>
      {renderFriends()}
    </div>
    </>
  )
}
