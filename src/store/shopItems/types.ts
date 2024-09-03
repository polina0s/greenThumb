export type ShopItemsSizes = {
  value: string;
  disabled: boolean;
};

export type ShopItemsImages = {
  src: string;
  alt: string;
  id: number;
};

export type ShopItemsCare = {
  id: number;
  name: string;
  text: string;
};

export type GetShopItemsResponseData = {
  id: number;
  category: string;
  name: string;
  price: number;
  description: string;
  images: ShopItemsImages[];
  sizes: ShopItemsSizes[];
  care: ShopItemsCare[];
};

export type ShopItemsStore = {
  isLoading: boolean;
  shopItems: GetShopItemsResponseData[];
};
