import { GetShopItemsResponseData } from './shopItems.actions';

type State = {
  shopItems: { isLoading: boolean; shopItems: GetShopItemsResponseData[] };
};

export const allShopItemsSelector = (state: State) => state.shopItems.shopItems;
