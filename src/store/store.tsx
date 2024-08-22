import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { bestSellCategoriesReducer } from './bestSellCategories/bestSellCategories.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { shopItemsReducer } from './shopItems';

const reducer = {
  shopItems: shopItemsReducer,
  categories: categoriesReducer,
  bestSellCategories: bestSellCategoriesReducer,
};

export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
