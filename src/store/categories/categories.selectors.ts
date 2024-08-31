import { RootState } from '../store';

export const allCategoriesSelector = (state: RootState) => {
  return {
    categories: state.categories.categories,
    isLoading: state.categories.isLoading,
  };
};
