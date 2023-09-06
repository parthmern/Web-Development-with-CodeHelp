import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name : 'cart',
    initialState : [] , 
    reducers : {
        add : ()=>{console.log("add")},
        remove : ()=>{console.log("add")}
    }
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;