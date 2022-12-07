import { configureStore } from "@reduxjs/toolkit";
import { userReducer, stickerReducer, friendsReducer, publicUsersReducer } from "./reducers";

const store = configureStore({
    reducer: {
    user: userReducer,
    stickers: stickerReducer,
    friends: friendsReducer,
    publicUsers: publicUsersReducer
    }
})

export default store
