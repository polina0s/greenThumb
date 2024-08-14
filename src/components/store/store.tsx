import { configureStore } from '@reduxjs/toolkit';

import { shopItemsReducer } from './shopItem';

const reducer = {
  shopItems: shopItemsReducer,
};

export const store = configureStore({
  reducer: reducer,
});
