import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../../api';
import { GetTestimonialsResponseData } from './types';

export const getTestimonials = createAsyncThunk<{
  testimonials: GetTestimonialsResponseData[];
}>('testimonials/getAll', async (_, { rejectWithValue }) => {
  try {
    const response = await api.getTestimonials();
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});
