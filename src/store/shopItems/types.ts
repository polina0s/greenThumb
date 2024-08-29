export type ShopItemsSizes = {
  value: string;
  disabled: boolean;
};

export type ShopItemsImages = {
  src: string;
  alt: string;
  id: number;
};

export type GetShopItemsResponseData = {
  id: number;
  name: string;
  price: number;
  description: string;
  images: ShopItemsImages[];
  sizes: ShopItemsSizes[];
};

export type ShopItemsStore = {
  isLoading: boolean;
  shopItems: GetShopItemsResponseData[];
};
