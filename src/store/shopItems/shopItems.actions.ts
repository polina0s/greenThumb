import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../api';
import { GetShopItemsResponseData } from './types';

export const getShopItems = createAsyncThunk<{
  items: GetShopItemsResponseData[];
}>('shopItems/getAll', async (_, { rejectWithValue }) => {
  try {
    const response = await api.getShopItems();
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});
