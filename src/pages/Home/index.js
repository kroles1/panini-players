import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css'
import { getUserData } from '../../actions';
import logo from '../../assets/qatar2022.png'


export default function Home() {
  // const [formData, setFormData] = useState({ username: "", password: "" })
  const [logIn, setLogIn] = useState(null);
  const getFormData = (form) => Object.fromEntries(new FormData(form).entries());

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
		const formData = getFormData(e.target);
		axios.post("http://127.0.0.1:5000/login", formData)
			.then((res) => {
				console.log(res.data, "POST RESPONSE");
				if (res.data.message === "Welcome Panini Player") {
					console.log("USERNAME:", formData["username"]);
					setLogIn(formData);
          dispatch(getUserData(formData["username"]))
          navigate("/dashboard/album")
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
      <div id='loginContainer'>
        <div id='flagsLeft'>
          <div id='groupA'>
            <div>
              <img className='flag' alt='QAT' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/QAT'></img>
              <img className='flag' alt='ECU' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ECU'></img>
            </div>
            <div>
              <img className='flag' alt='SEN' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SEN'></img>
              <img className='flag' alt='NED' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/NED'></img>
            </div>
          </div>
          <div id='groupB'>
            <div>
              <img className='flag' alt='ENG' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ENG'></img>
              <img className='flag' alt='IRN' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/IRN'></img>
            </div>
            <div>
              <img className='flag' alt='USA' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/USA'></img>
              <img className='flag' alt='WAL' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/WAL'></img>
            </div>
          </div>
          <div id='groupC'>
            <div>
              <img className='flag' alt='ARG' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ARG'></img>
              <img className='flag' alt='KSA' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/KSA'></img>
            </div>
            <div>
              <img className='flag' alt='MEX' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/MEX'></img>
              <img className='flag' alt='POL' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/POL'></img>
            </div>
          </div>
          <div id='groupD'>
            <div>
              <img className='flag' alt='FRA' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/FRA'></img>
              <img className='flag' alt='AUS' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/AUS'></img>
            </div>
            <div>
              <img className='flag' alt='DEN' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/DEN'></img>
              <img className='flag' alt='TUN' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/TUN'></img>
            </div>
          </div>
        </div>

        <div className='loginpg'>
          <img id='logo' alt='logo' src={logo}></img>
          <form className='login' onSubmit={handleSubmit}>
            <input className="formInput" type="text" placeholder="Username" name="username"></input>
            <input className="formInput" type="password" placeholder="Password" name="password"></input>
            <input className="submitBtn" type="submit" value="Log in"></input>
          </form>
          <button className="registerNav"><a href='/register'>Register</a></button>
        </div>

        <div id='flagsRight'>
          <div id='groupE'>
            <div>
              <img className='flag' alt='ESP' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/ESP'></img>
              <img className='flag' alt='CRC' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CRC'></img>
            </div>
            <div>
              <img className='flag' alt='GER' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/GER'></img>
              <img className='flag' alt='JPN' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/JPN'></img>
            </div>
          </div>
          <div id='groupF'>
            <div>
              <img className='flag' alt='BEL' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/BEL'></img>
              <img className='flag' alt='CAN' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CAN'></img>
            </div>
            <div>
              <img className='flag' alt='MAR' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/MAR'></img>
              <img className='flag' alt='CRO' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CRO'></img>
            </div>
          </div>
          <div id='groupG'>
            <div>
              <img className='flag' alt='BRA' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/BRA'></img>
              <img className='flag' alt='SRB' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SRB'></img>
            </div>
            <div>
              <img className='flag' alt='SUI' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/SUI'></img>
              <img className='flag' alt='CAM' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/CMR'></img>
            </div>
          </div>
          <div id='groupH'>
            <div>
              <img className='flag' alt='POR' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/POR'></img>
              <img className='flag' alt='GHA' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/GHA'></img>
            </div>
            <div>
              <img className='flag' alt='URU' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/URU'></img>
              <img className='flag' alt='KOR' src='https://cloudinary.fifa.com/api/v3/picture/flags-sq-4/KOR'></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
