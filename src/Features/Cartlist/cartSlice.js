import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[],
        // total:0

    },
    reducers:{
        addtoCart:(state, action)=>{
            // state.cart.push(action.payload)
            const product=action.payload;
            const existingProduct= state.cart.find(item => item._id ===product._id)

            if (!existingProduct){
                state.cart.push({
                    ...action.payload,
                    count:1,
                    total:action.payload.price
                })
            }
          },
          increment:(state,actions)=>{
            console.log(actions.payload ,'payload..');
            const product= actions.payload
            state.cart.forEach(item => {
                if(item._id === product._id){
                    item.count++
                    item.total +=product.price
                }
            });
          },
      
          decrement:(state,actions)=>{
            const product= actions.payload
            state.cart.forEach(item => {
                if(item._id === product._id){
                    item.count--
                    item.total -= product.price
                }
            });
          },
          remove:(state,action)=>{
            const productId=action.payload
           state.cart= state.cart.filter(item => item._id !== productId)
            
          },

          cartNull:(state)=>{
            state.cart=[]
        }
        },

       
     
      

    }
)

export const {addtoCart,increment,decrement,remove,cartNull}=cartSlice.actions
export default cartSlice.reducer