import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const select = (state: RootState) => state;

export const allSaleItemsSelector = createSelector(select, (state) => {
  return {
    items: state.saleItems.saleItems,
    isLoading: state.saleItems.isLoading,
  };
});
