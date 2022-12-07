import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Register, Album, Friends, AddFriend, FriendInfo, Public, AddSticker, ConfirmTrade} from "./pages"
import Layout from "./layout"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path='/dashboard' element={<Layout />} >
        <Route index element={<Album />} />
        <Route path="addSticker" element={<AddSticker />} />
        <Route path="confirmTrade" element={<ConfirmTrade />} />
        <Route path="friends" element={<Friends />} />
        <Route path="friends/add" element={<AddFriend />} />
        <Route path="friends/:friend" element={<FriendInfo />} />
        <Route path="public" element={<Public />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
