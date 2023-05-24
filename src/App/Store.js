import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../Features/Cartlist/cartSlice'

export default configureStore({
  reducer: {
    cart:cartReducer,
  },
  
})