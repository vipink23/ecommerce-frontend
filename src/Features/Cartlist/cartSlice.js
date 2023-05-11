import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[]

    },
    reducers:{
        addtoCart:(state, action)=>{
            state.cart.push(action.payload)
          }
        },
        incrementQuantity:(state,action)=>{
            state.cart += 1
          },
      
          decrementQuantity:(state,action)=>{
              state.cart -= 1
          }
      

    }
)

export const {addtoCart,incrementQuantity,decrementQuantity}=cartSlice.actions
export default cartSlice.reducer