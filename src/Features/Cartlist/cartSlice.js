import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[]

    },
    reducers:{
        addtoCart:(state, action)=>{
            // state.cart.push(action.payload)
            const product=action.payload;
            const existingProduct= state.cart.find(item => item._id ===product._id)

            if (!existingProduct){
                state.cart.push(product)
            }
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