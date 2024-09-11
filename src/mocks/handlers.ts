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
  http.post<unknown, { id: number; quantity: number }>(
    '/cart',
    async ({ request }) => {
      const body = await request.json();
      const item = shopItems.find((item) => item.id === body.id);
      const found = cartItems.find((item) => item.id === body.id);
      if (item) {
        if (found) {
          cartItems.forEach((item) => {
            if (item.id === body.id) {
              const newQuantity = item.quantity + body.quantity;
              if (newQuantity >= 10) {
                item.quantity = 10;
              } else item.quantity = newQuantity;
            }
          });
        } else cartItems.push(item);
      }
      console.log(cartItems.length);
      return HttpResponse.json({ itemQuantity: cartItems.length });
    },
  ),
  http.get('/cart', () => {
    return HttpResponse.json({
      items: cartItems,
      itemsQuantity: cartItems.length,
    });
  }),
  http.delete<unknown, { id: number }>('/cart', async ({ request }) => {
    const body = await request.json();
    cartItems.forEach((item, i) => {
      if (item.id === body.id) cartItems.splice(i, 1);
    });
    return HttpResponse.json({
      items: cartItems,
      itemQuantity: cartItems.length,
    });
  }),
];
