import { createSlice } from '@reduxjs/toolkit';

import { getSaleItems } from './saleItems.actions';
import { SaleItemsStore } from './types';

const initialState: SaleItemsStore = {
  isLoading: false,
  saleItems: [],
};

const saleItemsSlice = createSlice({
  name: 'saleItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSaleItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSaleItems.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getSaleItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.saleItems = [...action.payload.items];
    });
  },
});

export const saleItemsReducer = saleItemsSlice.reducer;
