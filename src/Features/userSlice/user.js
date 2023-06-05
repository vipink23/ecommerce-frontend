import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:'user',
    initialState:{
        user:null,
        token:null
    },

    reducers:{
        login:(state,actions)=>{
            state.user=actions.payload.user
            state.token=actions.payload.token
        },
        logout:(state)=>{
            state.token =null
            state.user=null
        }
    }
})

export const {login,logout}=userSlice.actions
export default userSlice.reducer