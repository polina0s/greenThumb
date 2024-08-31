import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../api';
import { GetCategoriesResponseData } from './types';

export const getCategories = createAsyncThunk<{
  categories: GetCategoriesResponseData[];
}>('categories/getAll', async (_, { rejectWithValue }) => {
  try {
    const response = await api.getCategories();
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});
