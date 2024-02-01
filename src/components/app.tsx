import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { BestSellCard } from './bestSellCard';
import { CategoryCard } from './categoryCard';

const queryClient = new QueryClient();

export function MyApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <CategoryCard name="BONSAI" />
      <BestSellCard title="INDOOR PLANTS" />
    </QueryClientProvider>
  );
}
