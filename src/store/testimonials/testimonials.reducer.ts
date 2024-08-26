import { createSlice } from '@reduxjs/toolkit';

import { getTestimonials } from './testimonials.actions';
import { TestimonialsStore } from './types';

const initialState: TestimonialsStore = {
  isLoading: false,
  testimonials: [],
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTestimonials.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTestimonials.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getTestimonials.fulfilled, (state, action) => {
      state.isLoading = false;
      state.testimonials = [...action.payload.testimonials];
    });
  },
});

export const testimonialsReducer = testimonialsSlice.reducer;
