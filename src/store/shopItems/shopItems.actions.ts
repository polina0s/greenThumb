import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetShopItemsResponseData } from './types';

export const getShopItems = createAsyncThunk<{
  items: GetShopItemsResponseData[];
}>('shopItems/getAll', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('/shopItems');
    const result = await response.json();
    return result;
  } catch (err) {
    return rejectWithValue(err);
  }
});
