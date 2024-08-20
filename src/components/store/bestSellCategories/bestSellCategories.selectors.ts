import { GetBestSellCategoriesResponseData } from './bestSellCategories.actions';

type State = {
  bestSellCategories: {
    isLoadind: boolean;
    bestSellCategories: GetBestSellCategoriesResponseData[];
  };
};

export const allBestSellCategoriesSelector = (state: State) =>
  state.bestSellCategories.bestSellCategories;
