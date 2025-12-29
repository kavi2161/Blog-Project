import { createSlice } from "@reduxjs/toolkit";
const initialState={
    comment:[],
};

 
const UserSlice=createSlice({
    name:'comment',
    initialState,
    reducers:{
        getComments:(state,action)=>{
            state.comment=[...state.comment,action.payload]
        }
    }
})

export default UserSlice.reducer

export const {getComments}=UserSlice.actions