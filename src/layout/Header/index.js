import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default function Header() {
  return (
    <div className='navbar'>
      <NavLink to="/dashboard/profile" className='navlink'>Profile</NavLink>
      <NavLink to="" className='navlink'>Album</NavLink>
      <NavLink to="/dashboard/friends" className='navlink'>Friend List</NavLink>
      <NavLink to="/dashboard/public" className='navlink'>Public Trades</NavLink>
    </div>
  )
}
