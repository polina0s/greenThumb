import { RootState } from '../store';

export const allShopItemSelector = (state: RootState) => {
  return {
    item: state.shopItem.shopItem,
    isItemLoading: state.shopItem.isLoading,
  };
};
