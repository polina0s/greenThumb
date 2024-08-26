import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../api';
import { GetSaleItemsResponseData } from './types';

export const getSaleItems = createAsyncThunk<{
  items: GetSaleItemsResponseData[];
}>('saleItems/getAll', async (_, { rejectWithValue }) => {
  try {
    const response = await api.getSaleItems();
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});
