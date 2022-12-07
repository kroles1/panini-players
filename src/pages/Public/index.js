import React from 'react'
// socket io
import { Chat } from '../../components';
import io from "socket.io-client";
import { useEffect, useState } from "react";
let endPoint = "http://localhost:5000";

export default function Public() {
  const [socketInstance, setSocketInstance] = useState("");
  const [loading, setLoading] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(false);
 
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
    <div>
    <div>Public</div>
    {!buttonStatus ? (
      <button onClick={handleClick}>turn chat on</button>
    ) : (
      <>
      <button onClick={handleClick}>turn chat off</button>
      <div className="line">
        {!loading && <Chat socket={socketInstance} />}
      </div>
    </>
  )}
  </div>
  )
}
