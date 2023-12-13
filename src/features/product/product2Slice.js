import { createSlice } from '@reduxjs/toolkit';
import productData2 from '../../components/productData2';

const initialState = {
  cart:[],
  items2: productData2,
};


export const product2Slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
  },

});

export default product2Slice.reducer;
