import { createSlice } from "@reduxjs/toolkit";
import {  toast } from 'react-toastify';

const sliceCart = createSlice({
    name: 'addCart',
    initialState : [],
    reducers:{
        add(state, action){
            console.log(state, action)
            state.push(action.payload)
            toast.success('Product has been added to cart!',{
                autoClose:500
            })
            // state = action.payload
        },
        remove(state, action){
            // console.log(state,action)
            return state.filter((item)=> item.id !== action.payload)
        }
    }
})

export const {add, remove} = sliceCart.actions
export default sliceCart.reducer