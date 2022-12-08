import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import './index.css'

export default function Profile() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleLocation = (e) => {
        dispatch({
            type: 'LOCATION',
            payload: e.target.value
        })
        updateUserLocation(e.target.value, user)
    }

    // useEffect(() => {
    //     console.log(user.username)
    // }, [])
    
    return (
        <div className='profile'>
            {/* <h1>Name: {user.username}</h1>
            <h1>Friend Code: {user.userId}</h1>
            <h1>Friends: {totalFriends(user.friends)}</h1>
            <div className='test'>
                <label> <h1 style={{display: "inline"}}>Location:  </h1>
                    <select onChange={handleLocation} name='location'>
                        <option selected={user.location == 'London' ? true : false} value="London">London</option>
                        <option selected={user.location == 'Birmingham' ? true : false} value="Birmingham">Birmingham</option>
                        <option selected={user.location == 'Leeds' ? true : false} value="Leeds">Leeds</option>
                        <option selected={user.location == 'Liverpool' ? true : false} value="Liverpool">Liverpool</option>
                        <option selected={user.location == 'Glasgow' ? true : false} value="Glasgow">Glasgow</option>
                        <option selected={user.location == 'Sheffield' ? true : false} value="Sheffield">Sheffield</option>
                        <option selected={user.location == 'Bradford' ? true : false} value="Bradford">Bradford</option>
                        <option selected={user.location == 'Edinburgh' ? true : false} value="Edinburgh">Edinburgh</option>
                        <option selected={user.location == 'Manchester' ? true : false} value="Manchester">Manchester</option>
                        <option selected={user.location == 'Bristol' ? true : false} value="Bristol">Bristol</option>
                        <option selected={user.location == 'Leicester' ? true : false} value="Leicester">Leicester</option>
                        <option selected={user.location == 'Coventry' ? true : false} value="Coventry">Coventry</option>
                        <option selected={user.location == 'Cardiff' ? true : false} value="Cardiff">Cardiff</option>
                        <option selected={user.location == 'Belfast' ? true : false} value="Belfast">Belfast</option>
                        <option selected={user.location == 'Nottingham' ? true : false} value="Nottingham">Nottingham</option>
                        <option selected={user.location == 'Hull' ? true : false} value="Hull">Hull</option>
                        <option selected={user.location == 'Newcastle' ? true : false} value="Newcastle">Newcastle</option>
                        <option selected={user.location == 'Southampton' ? true : false} value="Southampton">Southampton</option>
                        <option selected={user.location == 'Derby' ? true : false} value="Derby">Derby</option>
                        <option selected={user.location == 'Portsmouth' ? true : false} value="Portsmouth">Portsmouth</option>
                        <option selected={user.location == 'Brighton' ? true : false} value="Brighton">Brighton</option>
                        <option selected={user.location == 'Plymouth' ? true : false} value="Plymouth">Plymouth</option>
                        <option selected={user.location == 'Northampton' ? true : false} value="Northampton">Northampton</option>
                        <option selected={user.location == 'Reading' ? true : false} value="Reading">Reading</option>
                        <option selected={user.location == 'Aberdeen' ? true : false} value="Aberdeen">Aberdeen</option>
                        <option selected={user.location == 'Stoke' ? true : false} value="Stoke">Stoke</option>
                    </select>
                </label>
            </div>
            <h1>Total Stickers: {totalStickers(user.cards)}</h1>
            <h1>Completion: {completion(user.cards).toFixed(1)}%</h1> */}
            <div className='profileKeys'>
                <h1>Name:</h1>
                <h1>Friend Code:</h1>
                <h1>Friends:</h1>
                <h1>Total Stickers:</h1>
                <h1>Completion:</h1>
                <h1 style={{display: "inline"}}>Location:</h1>
            </div>
            <div className='profileValues'>
                <h1>{user.username}</h1>
                <h1>{user.userId}</h1>
                <h1>{totalFriends(user.friends)}</h1>
                <h1>{totalStickers(user.cards)}</h1>
                <h1>{completion(user.cards).toFixed(1)}%</h1>
                <select onChange={handleLocation} name='location'>
                    <option selected={user.location == 'London' ? true : false} value="London">London</option>
                    <option selected={user.location == 'Birmingham' ? true : false} value="Birmingham">Birmingham</option>
                    <option selected={user.location == 'Leeds' ? true : false} value="Leeds">Leeds</option>
                    <option selected={user.location == 'Liverpool' ? true : false} value="Liverpool">Liverpool</option>
                    <option selected={user.location == 'Glasgow' ? true : false} value="Glasgow">Glasgow</option>
                    <option selected={user.location == 'Sheffield' ? true : false} value="Sheffield">Sheffield</option>
                    <option selected={user.location == 'Bradford' ? true : false} value="Bradford">Bradford</option>
                    <option selected={user.location == 'Edinburgh' ? true : false} value="Edinburgh">Edinburgh</option>
                    <option selected={user.location == 'Manchester' ? true : false} value="Manchester">Manchester</option>
                    <option selected={user.location == 'Bristol' ? true : false} value="Bristol">Bristol</option>
                    <option selected={user.location == 'Leicester' ? true : false} value="Leicester">Leicester</option>
                    <option selected={user.location == 'Coventry' ? true : false} value="Coventry">Coventry</option>
                    <option selected={user.location == 'Cardiff' ? true : false} value="Cardiff">Cardiff</option>
                    <option selected={user.location == 'Belfast' ? true : false} value="Belfast">Belfast</option>
                    <option selected={user.location == 'Nottingham' ? true : false} value="Nottingham">Nottingham</option>
                    <option selected={user.location == 'Hull' ? true : false} value="Hull">Hull</option>
                    <option selected={user.location == 'Newcastle' ? true : false} value="Newcastle">Newcastle</option>
                    <option selected={user.location == 'Southampton' ? true : false} value="Southampton">Southampton</option>
                    <option selected={user.location == 'Derby' ? true : false} value="Derby">Derby</option>
                    <option selected={user.location == 'Portsmouth' ? true : false} value="Portsmouth">Portsmouth</option>
                    <option selected={user.location == 'Brighton' ? true : false} value="Brighton">Brighton</option>
                    <option selected={user.location == 'Plymouth' ? true : false} value="Plymouth">Plymouth</option>
                    <option selected={user.location == 'Northampton' ? true : false} value="Northampton">Northampton</option>
                    <option selected={user.location == 'Reading' ? true : false} value="Reading">Reading</option>
                    <option selected={user.location == 'Aberdeen' ? true : false} value="Aberdeen">Aberdeen</option>
                    <option selected={user.location == 'Stoke' ? true : false} value="Stoke">Stoke</option>
                </select>
            </div>
        </div>
    )
}

const updateUserLocation = async (val, user) => {
    await axios.post("https://panini-players-backend.onrender.com/location", {location: val, id: user.userId})
}

const totalFriends = (friends) => {
    return friends.split(' ').length
}

const totalStickers = (stickers) => {
    let sum = 0
    const sticker_array = stickers.split(' ')
    sticker_array.forEach( str => {
        const [code, num] = str.split('-')
        sum += +num
    })
    return sum 
}

const completion = (stickers) => {
    const sticker_array = stickers.split(' ')
    const total = sticker_array.length
    let sum = 0
    sticker_array.forEach( str => {
        const [code, num] = str.split('-')
        if (num != 0) {
            sum += 1
        }
    })
    return (sum/total)*100
}
