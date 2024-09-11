import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../api';
import { GetCartItemResponseData } from './types';

export const addItemToCart = createAsyncThunk<
  null,
  { id: number; quantity: number }
>('cart/addItem', async (data, { rejectWithValue }) => {
  try {
    await api.addItemToCart({ id: data.id, quantity: data.quantity });
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const deleteItemFromCart = createAsyncThunk<null, number>(
  'cart/deleteItem',
  async (data, { rejectWithValue }) => {
    try {
      await api.deleteItemFromCart(data);
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
