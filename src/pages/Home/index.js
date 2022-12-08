import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css'
import { getUserData } from '../../actions';


export default function Home() {
  // const [formData, setFormData] = useState({ username: "", password: "" })
  const [logIn, setLogIn] = useState(null);
  const getFormData = (form) => Object.fromEntries(new FormData(form).entries());

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
		const formData = getFormData(e.target);
		axios.post("https://panini-players-backend.onrender.com/login", formData)
			.then((res) => {
				console.log(res.data, "POST RESPONSE");
				if (res.data.message === "Welcome Panini Player") {
					console.log("USERNAME:", formData["username"]);
					setLogIn(formData);
          dispatch(getUserData(formData["username"]))
          navigate("/dashboard")
				} else {
					console.log("FAILED");
				}
			})
			.catch((err) => console.error(err));
  }
  // const handleChange = (e) => {
  //   const { name, value } =e.target
  //   setFormData({...formData, [name]: value});
  // }
  return (
    <>
    <div className='loginpg'>
    <form className='login' onSubmit={handleSubmit}>
      <input className="formInput" type="text" placeholder="Username" name="username"></input>
      <input className="formInput" type="password" placeholder="Password" name="password"></input>
      <input className="submitBtn" type="submit" value="Log in"></input>
    </form>
    <button className="registerNav"><a href='/register'>Register</a></button>
    </div>
    </>
  )
}
