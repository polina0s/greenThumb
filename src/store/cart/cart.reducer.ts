import { createSlice } from '@reduxjs/toolkit';

import {
  addItemToCart,
  deleteItemFromCart,
  getCartItems,
} from './cart.actions';
import { CartStore } from './types';

const initialState: CartStore = {
  isLoading: false,
  items: [],
  itemsQuantity: 0,
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
    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.itemsQuantity = action.payload.itemQuantity;
    });
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCartItems.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = [...action.payload.items];
    });
    builder.addCase(deleteItemFromCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteItemFromCart.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteItemFromCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload.items;
      state.itemsQuantity = action.payload.itemQuantity;
    });
  },
});

export const cartReducer = cartSlice.reducer;