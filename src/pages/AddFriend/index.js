import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import './style.css'

export default function AddFriend() {
  const [formData, setFormData] = useState({})
  const [added, setAdded] = useState(false)
  const userId = useSelector(state => state.user.userId)

  const handleChange = (e) => {
      const { name, value } =e.target
      setFormData({...formData, [name]: value});
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://127.0.0.1:5000/users/${userId}/friends`, formData)
			.then((res) => {
				setAdded(true)
			})
			.catch((err) => console.error(err));
  }

  return (
    <>
    <h1 className='addFriendTitle'>Add friend</h1>
    <div className='addFriendForm'>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="User Id" name='friend' value={formData.friend} onChange={handleChange} className="friendInput"></input>
      <input type="submit" value="Add friend" className='friendSubmit'></input>
    </form>
    {added && <p className='friendAdded'>Friend Added</p>}
    </div>
    </>
    
  )
}
