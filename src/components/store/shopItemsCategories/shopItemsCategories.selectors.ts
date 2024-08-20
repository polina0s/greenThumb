import { GetShopItemsCategoriesResponseData } from './shopItemsCategories.actions';

type State = {
  shopItemsCategories: {
    isLoading: boolean;
    shopItemsCategories: GetShopItemsCategoriesResponseData[];
  };
};

export const allShopItemsCategoriesSelector = (state: State) =>
  state.shopItemsCategories.shopItemsCategories;
