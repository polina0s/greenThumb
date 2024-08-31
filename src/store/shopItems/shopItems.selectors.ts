import { RootState } from '../store';

export const allShopItemsSelector = (state: RootState) => {
  return {
    items: state.shopItems.shopItems,
    isLoading: state.shopItems.isLoading,
  };
};
