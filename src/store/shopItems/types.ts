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
  watering: string;
  sunlight: string;
  soil: string;
  humidity: string;
  toxicity: string;
  benefits: string;
  story: string;
  scientific: string;
};

export type GetShopItemsResponseData = {
  id: number;
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
