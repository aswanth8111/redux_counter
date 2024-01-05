import { createSlice } from "@reduxjs/toolkit";


 const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0

    },
     //action are created inside this reducer key as object
    reducers:{
       //logic to update state
       //function to increment number
       increment:(state,action)=>{
        state.value += action.payload
       },
       //function to decrement a number
       decrement:(state,action)=>{
        state.value -=action.payload
       },
       //function to rest
       reset:(state)=>{
        state.value = 0
       }
    }
 })
//action is required by component inorder to update state
 export const{increment , decrement, reset} = counterSlice.actions

 //reducer is required to store to change the state value
 export default counterSlice.reducer