import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Register, Album, Friends, AddFriend, FriendInfo, Public, AddSticker, ConfirmTrade, Profile, PublicUserInfo} from "./pages"
import Layout from "./layout"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path='/dashboard' element={<Layout />} >
        <Route path='album' element={<Album />} />
        <Route path="profile" element={<Profile />} />
        <Route path="addSticker" element={<AddSticker />} />
        <Route path="confirmTrade" element={<ConfirmTrade />} />
        <Route path="friends" element={<Friends />} />
        <Route path="friends/add" element={<AddFriend />} />
        <Route path="friends/:friend" element={<FriendInfo />} />
        <Route path="public" element={<Public />} />
        <Route path="publictrade/:user" element={<PublicUserInfo />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
