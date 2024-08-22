import { http, HttpResponse } from 'msw';

import { bestSelling, categories, shopItems } from './data';

export const handlers = [
  http.get('http://localhost:8000/shopItems/:id', ({ params }) => {
    const { id } = params;
    const plant = shopItems.find((el) => el.id === +id);
    return HttpResponse.json(plant);
  }),
  http.get('http://localhost:8000/shopItems', () => {
    return HttpResponse.json({
      items: shopItems,
    });
  }),
  http.get('http://localhost:8000/categories', () => {
    return HttpResponse.json({
      categories: categories,
    });
  }),
  http.get('http://localhost:8000/bestSellingItemsCategories', () => {
    return HttpResponse.json({
      categories: bestSelling,
    });
  }),
];
