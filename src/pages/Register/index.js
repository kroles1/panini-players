import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css'
import logo from '../../assets/qatar2022.png'


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
      <div id='registerContainer'>
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

        <div className="registerForm">
            <img id='logo' alt='logo' src={logo}></img>
          <form className='register' onSubmit={handleSubmit}>
            <input className='formInput' type="text" placeholder="Username" name="username"></input>
            <input className='formInput' type="email" placeholder="Email" name="email"></input>
            {/* <label>Choose the closest city</label> */}
            <select className='formInput' name='location'>
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
            <input className='formInput' type="password" placeholder="Password" name="password_1"></input>
            <input className='formInput' type="password" placeholder="Confirm password" name="password_2"></input>
            <input className="submitBtn" type="submit" value="Register"></input>
          </form>
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
