export type GetSaleItemsResponseData = {
  id: number;
  saleValue: number;
  name: string;
  newPrice: number;
  oldPrice: number;
  img: string;
};

export type SaleItemsStore = {
  isLoading: boolean;
  saleItems: GetSaleItemsResponseData[];
};
