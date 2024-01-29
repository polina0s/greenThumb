import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Header } from './header';

const queryClient = new QueryClient();

export function MyApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
    </QueryClientProvider>
  );
}
