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

		axios.post("https://panini-players-backend.onrender.com/register", formData)
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
      <input type="text" placeholder="Username" name="username"></input>
      <input type="email" placeholder="Email" name="email"></input>
      <label>Choose the closest city</label>
      <select name='location'>
        <option value="London">London</option>
        <option value="Birmingham">Birmingham</option>
        <option value="Leeds">Leeds</option>
        <option value="Liverpool">Liverpool</option>
        <option value="Glasgow">Glasgow</option>
        <option value="Sheffield">Sheffield</option>
        <option value="Bradford">Bradford</option>
        <option value="Edinburgh">Edinburgh</option>
        <option value="Manchester">Manchester</option>
        <option value="Bristol">Bristol</option>
        <option value="Leicester">Leicester</option>
        <option value="Coventry">Coventry</option>
        <option value="Cardiff">Cardiff</option>
        <option value="Belfast">Belfast</option>
        <option value="Nottingham">Nottingham</option>
        <option value="Hull">Hull</option>
        <option value="Newcastle">Newcastle</option>
        <option value="Southampton">Southampton</option>
        <option value="Serby">Derby</option>
        <option value="Portsmouth">Portsmouth</option>
        <option value="Brighton">Brighton</option>
        <option value="Plymouth">Plymouth</option>
        <option value="Northampton">Northampton</option>
        <option value="Reading">Reading</option>
        <option value="Aberdeen">Aberdeen</option>
        <option value="Stoke">Stoke</option>
      </select>
      <input type="password" placeholder="Password" name="password_1"></input>
      <input type="password" placeholder="Confirm password" name="password_2"></input>
      <input type="submit" value="Register"></input>
    </form>
    </>
  )
}
