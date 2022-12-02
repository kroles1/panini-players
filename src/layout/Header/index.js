import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <NavLink to="">Album</NavLink>
      <NavLink to="/dashboard/friends">Friend List</NavLink>
      <NavLink to="/dashboard/public">Public Trades</NavLink>
    </>
  )
}
