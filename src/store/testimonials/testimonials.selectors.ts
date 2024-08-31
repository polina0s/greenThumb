import { RootState } from '../store';

export const allTestimonialsSelector = (state: RootState) => {
  return {
    testimonials: state.testimonials.testimonials,
    isLoading: state.testimonials.isLoading,
  };
};
