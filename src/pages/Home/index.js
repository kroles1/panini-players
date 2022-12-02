import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const test = useSelector(state => state.test)
  console.log(test)

  return (
    <>
    <form>
      <input type="text" placeholder="Username"></input>
      <input type="password" placeholder="Password"></input>
      <input type="submit" value="Log in"></input>
    </form>
    <button>Register</button>
    </>
  )
}
