import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

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
    axios.post(`https://panini-players-backend.onrender.com/users/${userId}/friends`, formData)
			.then((res) => {
				setAdded(true)
			})
			.catch((err) => console.error(err));
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="User Id" name='friend' value={formData.friend} onChange={handleChange}></input>
      <input type="submit" value="Add friend"></input>
    </form>
    {added && <p>Friend Added</p>}
    </>
  )
}
