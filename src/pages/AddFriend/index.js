import React, { useState } from 'react'
import axios from 'axios'

export default function AddFriend() {
  const [formData, setFormData] = useState({})
  const [added, setAdded] = useState(false)

  const handleChange = (e) => {
      const { name, value } =e.target
      setFormData({...formData, [name]: value});
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.patch("http://127.0.0.1:5000/addFriend", formData)
			.then((res) => {
				setAdded(true)
			})
			.catch((err) => console.error(err));
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="User Id" name='userId' value={formData.userId} onChange={handleChange}></input>
      <input type="submit" value="Add friend"></input>
    </form>
    {added && <p>Friend Added</p>}
    </>
  )
}
