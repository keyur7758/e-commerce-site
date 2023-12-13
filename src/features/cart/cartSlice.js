import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart:[],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart:(state,action)=>{
      let find = state.cart.findIndex((item)=>item.id ===action.payload.id)
      if(find >= 0){
        state.cart[find].quantity += 1;
      }else{

        state.cart.push(action.payload)
      }
    },
    removeTocart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity -= 1;
        if (state.cart[find].quantity <= 0) {
          state.cart[find].quantity = 1;
        }
      }
    },
    removeItem:(state,action)=>{
      state.cart = state.cart.filter((item)=>item.id !== action.payload)
    }
   
  }
});

export const {addTocart,removeItem,  removeTocart } = cartSlice.actions;


export default cartSlice.reducer;
