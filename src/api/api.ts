import queryString from 'query-string';

import { GetCartItemParams, GetShopItemsParams } from './types';

class Api {
  async getShopItems({
    limit,
    price,
    category,
    type,
    sortBy,
    search,
  }: GetShopItemsParams) {
    const query = queryString.stringify(
      { limit, price, category, type, sortBy, search },
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

  async addItemToCartBody({ id, quantity }: GetCartItemParams) {
    const response = await fetch('/cart', {
      method: 'POST',
      body: JSON.stringify({ id: id, quantity: quantity }),
    });
    const json = await response.json();

    return json;
  }

  async getCartItems() {
    const response = await fetch('/cart');
    const json = await response.json();

    return json;
  }

  async deleteItemFromCart(id: number) {
    const response = await fetch('/cart', {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
    });
    const json = await response.json();

    return json;
  }
}

export const api = new Api();
