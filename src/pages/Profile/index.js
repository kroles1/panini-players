import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Profile() {
    const user = useSelector(state => state.user)

    const totalFriends = (friends) => {
        return friends.split(' ').length
    }

    const totalStickers = () => {
        
    }

    useEffect(() => {
        console.log(user.username)
      }, [])

    return (
        <div>
            <h1>Name: {user.username}</h1>
            <h1>Friend Code: {user.userId}</h1>
            <h1>Friends: {totalFriends(user.friends)}</h1>
            <h1>location: {user.location}</h1>
            <h1>Total Stickers: </h1>
            <h1>Completion: </h1>
        </div>
    )
}
