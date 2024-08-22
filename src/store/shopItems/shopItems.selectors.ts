import { RootState } from '../store';

export const allShopItemsSelector = (state: RootState) =>
  state.shopItems.shopItems;
