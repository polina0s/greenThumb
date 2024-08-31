export type GetBestSellCategoriesResponseData = {
  id: number;
  name: string;
  img: string;
};

export type BestSellCategoriesStore = {
  isLoading: boolean;
  bestSellCategories: GetBestSellCategoriesResponseData[];
};
