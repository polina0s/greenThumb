import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../api';
import { GetShopItemsResponseData } from '../shopItems/types';

export const getShopItemById = createAsyncThunk<
  GetShopItemsResponseData,
  { id: number }
>('shopItem/getItem', async (data, { rejectWithValue }) => {
  try {
    const response = await api.getShopItemById(data);
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});
