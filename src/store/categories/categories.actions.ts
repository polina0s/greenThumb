import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetShopItemsResponseData } from '../shopItems/shopItems.actions';

export type GetCategoriesResponseData = {
  id: number;
  name: string;
  img: string;
  items: GetShopItemsResponseData[];
};

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
