import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const select = (state: RootState) => state;

export const allCartSelector = createSelector(select, (state) => {
  return { isLoading: state.cart.isLoading, items: state.cart.items };
});
