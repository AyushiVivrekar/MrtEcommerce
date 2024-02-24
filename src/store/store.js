import { configureStore } from "@reduxjs/toolkit";
import cartRedu from './sliceCart'

const store = configureStore({
    reducer:{
        addCart: cartRedu,
    }
})
export default store;