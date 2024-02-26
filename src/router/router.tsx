import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from '../../src/pages/mainPage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);
