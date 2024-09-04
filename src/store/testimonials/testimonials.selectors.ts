import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const select = (state: RootState) => state;

export const allTestimonialsSelector = createSelector(select, (state) => {
  return {
    testimonials: state.testimonials.testimonials,
    isLoading: state.testimonials.isLoading,
  };
});
