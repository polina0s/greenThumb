import { GetShopItemsResponseData } from '../shopItems/types';

export type GetCategoriesResponseData = {
  id: number;
  name: string;
  img: string;
  items: GetShopItemsResponseData[];
};

export type CategoriesStore = {
  isLoading: boolean;
  categories: GetCategoriesResponseData[];
};
