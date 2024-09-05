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
];
