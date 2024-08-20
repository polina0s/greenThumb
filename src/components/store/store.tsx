import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { shopItemsReducer } from './shopItems';
import { shopItemsCategoriesReducer } from './shopItemsCategories/shopItemsCategories.reducer';

const reducer = {
  shopItems: shopItemsReducer,
  shopItemsCategories: shopItemsCategoriesReducer,
};

export const store = configureStore({
  reducer: reducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
