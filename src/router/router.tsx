import { createBrowserRouter } from 'react-router-dom';

import { CatalogPage } from '../pages/catalogPage';
import { ErrorPage } from '../pages/errorPage';
import { MainPage } from '../pages/mainPage';
import { ProductPage } from '../pages/productPage';

export const Router = createBrowserRouter(
  [
    {
      path: '/',
      Component: () => <MainPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'catalog',
      Component: () => <CatalogPage />,
    },
    {
      path: '/catalog/:id',
      Component: () => <ProductPage />,
    },
  ],
  { basename: '/' },
);
