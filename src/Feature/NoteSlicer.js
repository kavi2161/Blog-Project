import { createSlice } from "@reduxjs/toolkit";

const initialState={
    notecomment:[],
};

const NoteSlicer=createSlice({
    name:"note",
    initialState,
    reducers:{
        notecomment:(state,action)=>{
            state.notecomment=[...state.notecomment,action.payload]
        }
    }
})

export default NoteSlicer.reducer

export const {notecomment} =NoteSlicer.actions