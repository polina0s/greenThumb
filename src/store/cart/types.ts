export type CartStore = {
  isLoading: boolean;
  items: GetCartItemResponseData[];
  itemsQuantity: number;
};

export type GetCartItemResponseData = {
  id: number;
  img?: string;
  name: string;
  price: number;
  quantity?: number;
};
