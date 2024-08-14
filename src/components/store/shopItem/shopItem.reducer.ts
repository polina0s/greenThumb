import { createSlice } from '@reduxjs/toolkit';

import { getShopItems } from './shopItem.actions';

interface ShopItemsStore {
  isLoading: boolean;
  shopItems: { id: number }[];
}

const initialState: ShopItemsStore = {
  isLoading: false,
  shopItems: [],
};

const shopItemSlice = createSlice({
  name: 'shopItem',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getShopItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getShopItems.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getShopItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shopItems = [...action.payload.data];
    });
  },
});

export const shopItemsReducer = shopItemSlice.reducer;
