import queryString from 'query-string';

export type GetShopItemsParams = {
  limit?: number;
  price?: number;
  category?: string;
  type?: string;
};
class Api {
  async getShopItems({ limit, price, category, type }: GetShopItemsParams) {
    const query = queryString.stringify(
      { limit, price, category, type },
      { skipNull: true },
    );

    const response = await fetch(`/shopItems?${query}`);
    const json = await response.json();

    return json;
  }

  async getShopItemById({ id }: { id: number }) {
    const response = await fetch(`/shopItems/${id}`);
    const json = await response.json();

    return json;
  }

  async getCategories() {
    const response = await fetch('/categories');
    const json = await response.json();

    return json;
  }

  async getBestSellCategories() {
    const response = await fetch('/bestSellCategories');
    const json = await response.json();

    return json;
  }

  async getTestimonials() {
    const response = await fetch('/testimonials');
    const json = await response.json();

    return json;
  }

  async getSaleItems() {
    const response = await fetch('/saleItems');
    const json = await response.json();

    return json;
  }
}

export const api = new Api();
