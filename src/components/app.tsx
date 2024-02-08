import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Banner } from './banner/banner';
import { BestSellCard } from './bestSellCard';
import { CatalogCard } from './catalogCard';
import { CategoryCard } from './categoryCard';
import { Footer } from './footer';
import { Header } from './header';
import { SaleCard } from './saleCard';

const queryClient = new QueryClient();

export function MyApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <Banner
        title="Plants are our Passion"
        description="Even if you don’t have a green thumb, you can still have a green
            home."
      />
      <SaleCard />
      <CatalogCard />
      <CategoryCard name="BONSAI" />
      <BestSellCard title="INDOOR PLANTS" />
      <Footer />
    </QueryClientProvider>
  );
}
