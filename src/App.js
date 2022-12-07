import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Register, Album, Friends, AddFriend, FriendInfo, Public, AddSticker, ConfirmTrade, Profile} from "./pages"
import Layout from "./layout"
// socket io
import {Chat} from "./components";
import io from "socket.io-client";
import { useEffect, useState } from "react";
let endPoint = "http://localhost:5000";

function App() {
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
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path='/dashboard' element={<Layout />} >
        <Route index element={<Album />} />
        <Route path="profile" element={<Profile />} />
        <Route path="addSticker" element={<AddSticker />} />
        <Route path="confirmTrade" element={<ConfirmTrade />} />
        <Route path="friends" element={<Friends />} />
        <Route path="friends/add" element={<AddFriend />} />
        <Route path="friends/:friend" element={<FriendInfo />} />
        <Route path="public" element={<Public />} />
      </Route>
    </Routes>
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
    </>
  );
}

export default App;
