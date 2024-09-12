export type GetShopItemsParams = {
  limit?: number;
  price?: number;
  category?: string;
  type?: string;
  sortBy?: string;
};

export type GetCartItemParams = {
  id: number;
  quantity: number;
};
