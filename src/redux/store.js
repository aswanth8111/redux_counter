import counterSlice from "./counterSlice";

const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    //reducer can only update value of state in store
    //reducer key is predefine(ibject which can hold mpre than one reducer)
    reducer:{
        //reducer is coming from counterslice since we are export reducer as export default
        counter:counterSlice

    }
})