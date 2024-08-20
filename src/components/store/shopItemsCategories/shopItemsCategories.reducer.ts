import { createSlice } from '@reduxjs/toolkit';

import {
  getShopItemsCategories,
  GetShopItemsCategoriesResponseData,
} from './shopItemsCategories.actions';

interface ShopItemsCategoriesStore {
  isLoading: boolean;
  shopItemsCategories: GetShopItemsCategoriesResponseData[];
}

const initialState: ShopItemsCategoriesStore = {
  isLoading: false,
  shopItemsCategories: [],
};

const shopItemsCategoriesSlice = createSlice({
  name: 'shopItemsCategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShopItemsCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getShopItemsCategories.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getShopItemsCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shopItemsCategories = [...action.payload.categories];
    });
  },
});

export const shopItemsCategoriesReducer = shopItemsCategoriesSlice.reducer;
