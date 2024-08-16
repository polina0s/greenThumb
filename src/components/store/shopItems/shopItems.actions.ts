import { createAsyncThunk } from '@reduxjs/toolkit';

export const getShopItems = createAsyncThunk(
  'shopItems/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/shopItems');
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
