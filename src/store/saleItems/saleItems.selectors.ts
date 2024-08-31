import { RootState } from '../store';

export const allSaleItemsSelector = (state: RootState) => {
  return {
    items: state.saleItems.saleItems,
    isLoading: state.saleItems.isLoading,
  };
};
