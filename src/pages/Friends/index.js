import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FriendItem } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getFriendsData } from '../../actions'

export default function Friends() {
  const friendsData = useSelector(state => state.friends.friends)
  // const friendsList = useSelector(state => state.user.friends)
  // console.log(friendsList);
  const username = useSelector(state => state.user.username)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFriendsData(username))
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
