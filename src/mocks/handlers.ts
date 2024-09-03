import { http, HttpResponse } from 'msw';

import {
  bestSelling,
  categories,
  saleItems,
  shopItems,
  testimonials,
} from './data';

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
    const items = shopItems.slice(0, limit);
    if (price) {
      items.filter((item) => item.price <= price);
    }
    if (category) {
      items.filter((item) => item.category === category);
    }
    return HttpResponse.json({ items: items });
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
];
