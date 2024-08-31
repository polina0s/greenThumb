import { RootState } from '../store';

export const allBestSellCategoriesSelector = (state: RootState) => {
  return {
    categories: state.bestSellCategories.bestSellCategories,
    isLoading: state.bestSellCategories.isLoading,
  };
};
