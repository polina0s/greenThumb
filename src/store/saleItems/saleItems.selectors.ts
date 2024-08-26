import { RootState } from '../store';

export const allSaleItemsSelector = (state: RootState) =>
  state.saleItems.saleItems;
