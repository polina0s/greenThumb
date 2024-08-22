import { RootState } from '../store';

export const allBestSellCategoriesSelector = (state: RootState) =>
  state.bestSellCategories.bestSellCategories;
