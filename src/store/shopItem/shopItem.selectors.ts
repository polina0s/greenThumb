import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const select = (state: RootState) => state;

export const allShopItemSelector = createSelector(select, (state) => {
  return {
    item: state.shopItem.shopItem,
    isItemLoading: state.shopItem.isLoading,
  };
});
