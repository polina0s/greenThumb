import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from '../pages/errorPage';

export const Router = createBrowserRouter(
  [
    {
      path: '/',
      async lazy() {
        const { MainPage } = await import('../pages/mainPage');
        return { Component: MainPage };
      },
      errorElement: <ErrorPage />,
    },
    {
      path: 'card',
      Component: () => <div>pizda</div>,
    },
  ],
  { basename: '/' },
);
