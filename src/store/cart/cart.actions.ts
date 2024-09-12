import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../api';
import { GetCartItemResponseData } from './types';

export const addItemToCartBody = createAsyncThunk<
  { itemQuantity: number },
  { id: number; quantity: number }
>('cart/addItem', async (data, { rejectWithValue }) => {
  try {
    const response = await api.addItemToCartBody({
      id: data.id,
      quantity: data.quantity,
    });
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const deleteItemFromCart = createAsyncThunk<
  { items: GetCartItemResponseData[]; itemQuantity: number },
  number
>('cart/deleteItem', async (data, { rejectWithValue }) => {
  try {
    const response = await api.deleteItemFromCart(data);
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

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
