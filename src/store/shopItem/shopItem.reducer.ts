import { createSlice } from '@reduxjs/toolkit';

import { getShopItemById } from './shopItem.actions';
import { ShopItemStore } from './types';

const initialState: ShopItemStore = {
  isLoading: false,
  shopItem: null,
};

export const shopItemSlice = createSlice({
  name: 'shopItem',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShopItemById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getShopItemById.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getShopItemById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shopItem = action.payload;
    });
  },
});

export const shopItemReducer = shopItemSlice.reducer;
