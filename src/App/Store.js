import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/Cartlist/cartSlice";
import useReducer from "../Features/userSlice/user";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";


const persistCongiguration = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  cart: cartReducer,
  user: useReducer,
});

const persistedReducer =persistReducer(persistCongiguration,reducer)

// export default configureStore({
//   reducer: {
//     // cart: cartReducer,
//     // user: useReducer,
//   },
// });


export default configureStore({
  reducer:persistedReducer
})