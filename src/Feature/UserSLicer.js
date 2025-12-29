 import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    data:[],
 };


 const UserData=createSlice({
    name:'user',
    initialState,
    reducers:{
        userInfo:(state,action)=>{
            state.data=[...state.data,action.payload]
        }
    }
 })

 export default UserData.reducer

 export const {userInfo} =UserData.actions