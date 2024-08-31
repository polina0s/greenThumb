import { createSlice } from '@reduxjs/toolkit';

import { getShopItemById } from './shopItem.actions';
import { ShopItemStore } from './types';

const initialState: ShopItemStore = {
  isLoading: true,
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
      state.shopItem = action.payload;
      state.isLoading = false;
    });
  },
});

export const shopItemReducer = shopItemSlice.reducer;
