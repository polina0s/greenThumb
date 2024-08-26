import { createSlice } from '@reduxjs/toolkit';

import { getBestSellCategories } from './bestSellCategories.actions';
import { BestSellCategoriesStore } from './types';

const initialState: BestSellCategoriesStore = {
  isLoading: false,
  bestSellCategories: [],
};

const bestSellCategoriesSlice = createSlice({
  name: 'bestSellCategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBestSellCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBestSellCategories.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getBestSellCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bestSellCategories = [...action.payload.categories];
    });
  },
});

export const bestSellCategoriesReducer = bestSellCategoriesSlice.reducer;
