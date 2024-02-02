import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// import { CatalogCard } from './catalogCard';
import { SaleCard } from './saleCard';

// import { BestSellCard } from './bestSellCard';
// import { CategoryCard } from './categoryCard';

const queryClient = new QueryClient();

export function MyApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <SaleCard />
      {/* <CatalogCard /> */}
      {/* <CategoryCard name="BONSAI" />
      <BestSellCard title="INDOOR PLANTS" /> */}
    </QueryClientProvider>
  );
}
