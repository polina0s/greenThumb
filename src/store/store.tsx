import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { bestSellCategoriesReducer } from './bestSellCategories/bestSellCategories.reducer';
import { cartReducer } from './cart';
import { categoriesReducer } from './categories/categories.reducer';
import { saleItemsReducer } from './saleItems';
import { shopItemReducer } from './shopItem';
import { shopItemsReducer } from './shopItems';
import { testimonialsReducer } from './testimonials';

const reducer = {
  shopItems: shopItemsReducer,
  shopItem: shopItemReducer,
  categories: categoriesReducer,
  bestSellCategories: bestSellCategoriesReducer,
  testimonials: testimonialsReducer,
  saleItems: saleItemsReducer,
  cart: cartReducer,
};

export const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
