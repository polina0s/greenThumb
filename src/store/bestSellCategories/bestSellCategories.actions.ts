import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../api';
import { GetBestSellCategoriesResponseData } from './types';

export const getBestSellCategories = createAsyncThunk<{
  categories: GetBestSellCategoriesResponseData[];
}>('/bestSellCategories/getAll', async (_, { rejectWithValue }) => {
  try {
    const response = await api.getBestSellCategories();
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});
