import { createSlice } from '@reduxjs/toolkit';

import { getCategories, GetCategoriesResponseData } from './categories.actions';

interface CategoriesStore {
  isLoading: boolean;
  categories: GetCategoriesResponseData[];
}

const initialState: CategoriesStore = {
  isLoading: false,
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = [...action.payload.categories];
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
