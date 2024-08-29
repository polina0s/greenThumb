import { RootState } from '../store';

export const allShopItemSelector = (state: RootState) =>
  state.shopItem.shopItem;
