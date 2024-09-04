import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const select = (state: RootState) => state;

export const allBestSellCategoriesSelector = createSelector(select, (state) => {
  return {
    categories: state.bestSellCategories.bestSellCategories,
    isLoading: state.bestSellCategories.isLoading,
  };
});
