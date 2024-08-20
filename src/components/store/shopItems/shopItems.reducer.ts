import { createSlice } from '@reduxjs/toolkit';

import { getShopItems, GetShopItemsResponseData } from './shopItems.actions';

interface ShopItemsStore {
  isLoading: boolean;
  shopItems: GetShopItemsResponseData[];
}

const initialState: ShopItemsStore = {
  isLoading: false,
  shopItems: [],
};

const shopItemsSlice = createSlice({
  name: 'shopItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShopItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getShopItems.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getShopItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shopItems = [...action.payload.items];
    });
  },
});

export const shopItemsReducer = shopItemsSlice.reducer;
