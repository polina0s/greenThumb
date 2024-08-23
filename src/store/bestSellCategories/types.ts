export type GetBestSellCategoriesResponseData = {
  id: number;
  name: string;
  img: string;
};

export type bestSellCategoriesStore = {
  isLoading: boolean;
  bestSellCategories: GetBestSellCategoriesResponseData[];
};
