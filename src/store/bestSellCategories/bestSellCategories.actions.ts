import { createAsyncThunk } from '@reduxjs/toolkit';

export type GetBestSellCategoriesResponseData = {
  id: number;
  name: string;
  img: string;
};

export const getBestSellCategories = createAsyncThunk<{
  categories: GetBestSellCategoriesResponseData[];
}>('/bestSellingItemsCategories/getAll', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('/bestSellingItemsCategories');
    const result = await response.json();
    return result;
  } catch (err) {
    return rejectWithValue(err);
  }
});
