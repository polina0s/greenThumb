import { createAsyncThunk } from '@reduxjs/toolkit';

type ShopItemsSizes = {
  value: string;
  disabled: boolean;
};

type ShopItemsImages = {
  src: string;
  alt: string;
};

export type GetShopItemsResponseData = {
  id: number;
  name: string;
  price: number;
  description: string;
  images: ShopItemsImages[];
  sizes: ShopItemsSizes[];
};

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
