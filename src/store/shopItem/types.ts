import { GetShopItemsResponseData } from '../shopItems/types';

export type ShopItemStore = {
  isLoading: boolean;
  shopItem?: GetShopItemsResponseData;
};
