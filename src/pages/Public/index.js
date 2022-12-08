import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPublicData } from '../../actions'
import './style.css'
// socket io
import { Chat } from '../../components';
import io from "socket.io-client";
import { useEffect, useState } from "react";
import {PublicItem} from '../../components'
let endPoint = "http://127.0.0.1:5000";

export default function Public() {
  const [socketInstance, setSocketInstance] = useState("");
  const [loading, setLoading] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(false);
  const publicData = useSelector(state => state.publicUsers.publicUsers)
  const userCardsStr = useSelector(state => state.user.cards)
  const location = useSelector(state => state.user.location)
  const mainUserId = useSelector(state => state.user.userId)


  const dispatch = useDispatch()
  const navigate = useNavigate()
console.log(publicData);
  const userCardsArray = userCardsStr.split(' ')
  let userNeeds = []
  let userDuplicates = []
  userCardsArray.forEach(card => {
    let [code, num] = card.split('-')
    if (num == 0) {
      userNeeds.push(code)
    } else if (num > 1) {
      userDuplicates.push(code)
    }
  });

  // console.log(userNeeds);
  // console.log(userDuplicates);

  let publicNAndD = []

  publicData.forEach(user => {
    let publicNeeds = []
    let publicDuplicates = []
    let publicCardsArray = user.cards.split(' ')
    // console.log(publicData);

    publicCardsArray.forEach(card => {
      let [code, num] = card.split('-')
      if (num == 0) {
        publicNeeds.push(code)
      } else if (num > 1) {
        publicDuplicates.push(code)
      }
    });

    publicNAndD.push({location: user.location, id: user.userId, needs: publicNeeds, duplicates: publicDuplicates})
  });

  // console.log(publicNAndD);

  let trades = []

  publicNAndD.forEach(user => {
    let give = []
    let get = []
    user.needs.forEach(card => {
      userDuplicates.forEach(dup => {
        if(dup == card) {
          give.push(dup)
        }
      })
    })

    user.duplicates.forEach(card => {
      userNeeds.forEach(need => {
        if(need == card) {
          get.push(need)
        }
      })
    })

    trades.push({id: user.id, give: give, get: get})
  })

  // console.log(trades);


  let usersToTradeWith = []

  trades.forEach(user => {
    if(user.give.length > 0 && user.get.length > 0){
      usersToTradeWith.push(user.id)
    }
  })

  // console.log(usersToTradeWith);
  
   

  useEffect(() => {
    dispatch(getPublicData(location))
  }, [])

  const renderUsers = () => {
    return(
        publicData.map((user) => {
          for(let i = 0; i < usersToTradeWith.length; i++){
            if (user.userId == usersToTradeWith[i]){
            return <button className="trade notrade" onClick={() => navigate(user.path)}><PublicItem username={user.username} /></button>
            // return <button className="trade">{user.username}</button>
            }
            else if (user.userId == mainUserId){
              return <break></break>
            }
          }
          return <button className='notrade' onClick={() => navigate(user.path)}><PublicItem username={user.username} /></button>
          // return <button>{user.username}</button>
        })
    )
}


//  socket io
  const handleClick = () => {
    if (buttonStatus === false) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };

  useEffect(() => {
    if (buttonStatus === true) {
      const socket = io.connect(`${endPoint}`);
 
      setSocketInstance(socket);
 
      socket.on("connect", (data) => {
        console.log(data);
      });
 
      setLoading(false);
 
      socket.on("disconnect", (data) => {
        console.log(data);
      });
 
      return function cleanup() {
        socket.disconnect();
      };
    }
  }, [buttonStatus]);
  return (
    <div className='publicPage'>
      <div className='locationUsers'>
      <h1 className='location'>Location: {location}</h1>
      <div className='publicUsers'>
    {renderUsers()}
    </div>
    </div>
    <div className='chat'>
    {!buttonStatus ? (
      <button className='chatBtn' onClick={handleClick}>turn chat on</button>
    ) : (
      <>
      <button className='chatBtn' onClick={handleClick}>turn chat off</button>
      <div className="line">
        {!loading && <Chat socket={socketInstance} />} 
      </div>
    </>
  )}
  </div>
  </div>
  )
}
