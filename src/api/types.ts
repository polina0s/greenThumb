export type GetShopItemsParams = {
  limit?: number;
  price?: number;
  category?: string;
  type?: string;
  sortBy?: string;
  search?: string;
};

export type GetCartItemParams = {
  id: number;
  quantity: number;
};
