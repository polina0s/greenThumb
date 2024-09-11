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

  async addItemToCart({ id, quantity }: { id: number; quantity: number }) {
    await fetch('/cart', {
      method: 'POST',
      body: JSON.stringify({ id: id, quantity: quantity }),
    });
  }

  async getCartItems() {
    const response = await fetch('/cart');
    const json = await response.json();

    return json;
  }

  async deleteItemFromCart(id: number) {
    await fetch('/cart', {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
    });
  }
}

export const api = new Api();
