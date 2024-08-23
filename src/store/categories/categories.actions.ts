import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetCategoriesResponseData } from './types';

export const getCategories = createAsyncThunk<{
  categories: GetCategoriesResponseData[];
}>('categories/getAll', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('/categories');
    const result = await response.json();
    return result;
  } catch (err) {
    return rejectWithValue(err);
  }
});
