import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../Features/Cartlist/cartSlice'
import  useReducer  from '../Features/userSlice/user'

export default configureStore({
  reducer: {
    cart:cartReducer,
    user:useReducer,

  },
  
})