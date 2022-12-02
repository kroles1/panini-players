import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const [formData, setFormData] = useState({ username: "", password: "" })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch()
    navigate("/dashboard")
  }

  const handleChange = (e) => {
    const { name, value } =e.target
    setFormData({...formData, [name]: value});
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange}></input>
      <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange}></input>
      <input type="submit" value="Log in"></input>
    </form>
    <button>Register</button>
    </>
  )
}
