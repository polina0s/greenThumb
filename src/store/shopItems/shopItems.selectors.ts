import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const select = (state: RootState) => state;

export const allShopItemsSelector = createSelector(select, (state) => {
  return {
    items: state.shopItems.shopItems,
    isLoading: state.shopItems.isLoading,
  };
});
