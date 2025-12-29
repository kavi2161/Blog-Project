import { createSlice } from "@reduxjs/toolkit";
const initialState={
    oders:[],
};

const BuySlicer=createSlice({
    name:'data',
    initialState,
    reducers:{
        oderData:(state,action)=>{
            state.oders=[...state.oders,action.payload]
        }
    }
})

export default BuySlicer.reducer

export const {oderData} = BuySlicer.actions