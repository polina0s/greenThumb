import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../api';
import { GetCartItemResponseData } from './types';

export const addItemToCart = createAsyncThunk<null, number>(
  'cart/addItem',
  async (data, { rejectWithValue }) => {
    try {
      await api.addItemToCart(data);
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getCartItems = createAsyncThunk<{
  items: GetCartItemResponseData[];
}>('cart/getItems', async (_, { rejectWithValue }) => {
  try {
    const response = await api.getCartItems();
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});
