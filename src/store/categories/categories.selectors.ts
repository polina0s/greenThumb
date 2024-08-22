import { RootState } from '../store';

export const allCategoriesSelector = (state: RootState) =>
  state.categories.categories;
