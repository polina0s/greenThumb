import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../api';
import { GetShopItemsResponseData } from './types';

export const getShopItems = createAsyncThunk<
  {
    items: GetShopItemsResponseData[];
  },
  { limit: number }
>('shopItems/getAll', async (data, { rejectWithValue }) => {
  try {
    const response = await api.getShopItems(data);
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});
