import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetShopItemsResponseData } from '../shopItems/shopItems.actions';

export type GetShopItemsCategoriesResponseData = {
  id: number;
  name: string;
  img: string;
  items: GetShopItemsResponseData[];
};

export const getShopItemsCategories = createAsyncThunk<{
  categories: GetShopItemsCategoriesResponseData[];
}>('shopItemsCategories/getAll', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('/shopItemsCategories');
    const result = await response.json();
    return result;
  } catch (err) {
    return rejectWithValue(err);
  }
});
