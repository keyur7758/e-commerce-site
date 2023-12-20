import { createSlice } from "@reduxjs/toolkit";

const prodetailsSlice = createSlice({
    name:"details",
    initialState:null,
    reducers:{
        GetDetails:(state,action)=>{
           return action.payload
        }
    }
})

export const {GetDetails} = prodetailsSlice.actions;
export default prodetailsSlice.reducer