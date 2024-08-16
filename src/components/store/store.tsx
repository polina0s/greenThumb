import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { shopItemsReducer } from './shopItems';

const reducer = {
  shopItems: shopItemsReducer,
};

export const store = configureStore({
  reducer: reducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
