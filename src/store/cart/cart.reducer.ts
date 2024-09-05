import { createSlice } from '@reduxjs/toolkit';

import { addItemToCart } from './cart.actions';
import { CartStore } from './types';

const initialState: CartStore = {
  isLoading: false,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addItemToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addItemToCart.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addItemToCart.fulfilled, (state) => {
      state.isLoading = false;
    });
  },
});

export const cartReducer = cartSlice.reducer;
