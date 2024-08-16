import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { Router } from '../router';
import { store } from './store/store';

const queryClient = new QueryClient();

export function MyApp() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>{' '}
    </Provider>
  );
}
