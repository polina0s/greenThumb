import { http, HttpResponse } from 'msw';

import { GetCartItemResponseData } from '../store/cart/types';
import {
  bestSelling,
  categories,
  saleItems,
  shopItems,
  testimonials,
} from './data';

const cartItems: GetCartItemResponseData[] = [];

export const handlers = [
  http.get('/shopItems/:id', ({ params }) => {
    const { id } = params;
    const plant = shopItems.find((el) => el.id === +id);
    return HttpResponse.json(plant);
  }),
  http.get('/shopItems', ({ request }) => {
    const url = new URL(request.url);
    const limit = +url.searchParams.get('limit');
    const price = +url.searchParams.get('price');
    const category = url.searchParams.get('category');
    const type = url.searchParams.get('type');
    let result = shopItems;

    if (limit) result = result.slice(0, limit);
    if (price) result = result.filter((item) => item.price <= price);
    if (category) result = result.filter((item) => item.category === category);
    if (type) result = result.filter((item) => item.type === type);

    return HttpResponse.json({ items: result });
  }),

  http.get('/categories', () => {
    return HttpResponse.json({
      categories: categories,
    });
  }),
  http.get('/bestSellCategories', () => {
    return HttpResponse.json({
      categories: bestSelling,
    });
  }),
  http.get('/testimonials', () => {
    return HttpResponse.json({
      testimonials: testimonials,
    });
  }),
  http.get('/saleItems', () => {
    return HttpResponse.json({
      items: saleItems,
    });
  }),
  http.post<unknown, { id: number }>('/cart', async ({ request }) => {
    const body = await request.json();
    const item = shopItems.find((item) => item.id === body.id);
    const found = cartItems.find((item) => item.id === body.id);
    if (item) {
      if (found) {
        cartItems.map((item) => {
          if (item.id === body.id) {
            item.quantity = item.quantity + 1;
          }
        });
      } else cartItems.push(item);
    }
    return HttpResponse.json({ status: 204 });
  }),
  http.get('/cart', () => {
    return HttpResponse.json({
      items: cartItems,
      itemsQuantity: cartItems.length,
    });
  }),
];
