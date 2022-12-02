import React from 'react'

export default function Register() {
  return (
    <>
    <form>
      <input type="text" placeholder='Username'></input>
      <input type="password" placeholder='Password'></input>
      <input type="password" placeholder='Confirm password'></input>
      <input type="text" placeholder='Email'></input>
      <input type="submit" value='Register'></input>
    </form>
    </>
  )
}
