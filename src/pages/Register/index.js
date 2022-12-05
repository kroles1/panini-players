import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css'


export default function Register() {
  // const [formData, setFormData] = useState({ username: "", email: "", password: "" })

  // const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch()
  //   navigate("/")
  // }

  // const handleChange = (e) => {
  //   const { name, value } =e.target
  //   setFormData({...formData, [name]: value});
  // }
  const navigate = useNavigate();
  const getFormData = (form) => Object.fromEntries(new FormData(form).entries());
  
  function handleSubmit(e) {
		e.preventDefault();
		const formData = getFormData(e.target);
		console.log(formData, "FORM DATA");

		axios.post("http://127.0.0.1:5000/register", formData)
			.then((res) => {
				console.log(res, "POST RESPONSE");
				if (res.data.message === "New user created") {
					console.log("REGISTRATION SUCCESSFULL");
          navigate("/")
				} else {
					console.log("REGISTRATION FAILED");
				}
			})
			.catch((err) => console.error(err));
	}

  return (
    <>
    <form className='register' onSubmit={handleSubmit}>
      <input type='text' placeholder='ID' name="id"></input>
      <input type="text" placeholder="Username" name="username"></input>
      <input type="email" placeholder="Email" name="email"></input>
      <input type='text' placeholder="Location" name="location"></input>
      <input type="password" placeholder="Password" name="password_1"></input>
      <input type="password" placeholder="Confirm password" name="password_2"></input>
      <input type="submit" value="Register"></input>
    </form>
    </>
  )
}
