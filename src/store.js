import { configureStore } from "@reduxjs/toolkit";
import { userReducer, stickerReducer } from "./reducers";

const store = configureStore({
    reducer: {
    user: userReducer,
    stickers: stickerReducer
    }
})

export default store
