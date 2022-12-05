import { configureStore } from "@reduxjs/toolkit";
import { userReducer, stickerReducer, friendsReducer } from "./reducers";

const store = configureStore({
    reducer: {
    user: userReducer,
    stickers: stickerReducer,
    friends: friendsReducer
    }
})

export default store
