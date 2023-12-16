import { createSlice } from '@reduxjs/toolkit';
import productData from '../../components/productData';

const initialState = {
  // cart:[],
  items: productData,
};


export const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
  },

});

export default productSlice.reducer;
