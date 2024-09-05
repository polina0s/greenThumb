import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const select = (state: RootState) => state;

export const allCategoriesSelector = createSelector(select, (state) => {
  return {
    categories: state.categories.categories,
    isLoading: state.categories.isLoading,
  };
});
