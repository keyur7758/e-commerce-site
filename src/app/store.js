import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/product/productSlice'
import product2Reducer from '../features/product/product2Slice'
import cartReducer from '../features/cart/cartSlice'
import prodetailsReducer from "../features/productdetails/prodetailsSlice";

export const store = configureStore({
    reducer:{
        product:productReducer,
        product2:product2Reducer,
        cartItem:cartReducer,
        details:prodetailsReducer
    }
})