import { RootState } from '../store';

export const allTestimonialsSelector = (state: RootState) =>
  state.testimonials.testimonials;
