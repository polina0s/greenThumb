export type CartStore = {
  isLoading: boolean;
  items: [];
};

export type GetCartItemResponseData = {
  id: number;
  img?: string;
  name: string;
  price: number;
  quantity?: number;
};
