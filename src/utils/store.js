import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**
 *   Create Store
 *     configureStore({}) -RTK
 * 
 * Provider my store to app
 *   <Provider store={store}/>  import from react-redux
 * 
 * Slice
 *   RTK=>  create-Slice{ (
 *       name:" ",
 *       initialState:{
 *         reducers:{
 *          addItem:(state,action)=>
 *        
 * }
 *       }
 * )}
 * 
 *     export const {addItem}=createSlice.actions
 * 
 *     export default createSlice.reducer
 * 
 *   put the slice into store
 * {
 * reducer:{
 * }
 * 
 * }
 *
 *
 *
 */
