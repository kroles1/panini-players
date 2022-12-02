import React from 'react'

export default function FriendInfo() {

  const renderDuplicates = () => {
    return(
      <div>
        <p>Player 1</p>
        <p>Player 2</p>
        <p>Player 3</p>
      </div>
    )
  }

  const renderNeeds = () => {
    return(
      <div>
        <p>Player 1</p>
        <p>Player 2</p>
        <p>Player 3</p>
      </div>
    )
  }


  return (
    <>
    <h1>Friends name</h1>
    <h3>Duplicates:</h3>
    {renderDuplicates()}
    <h3>Needs:</h3>
    {renderNeeds()}
    <button>Start trade</button>
    </>
  )
}
