import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import img from '../assets/images/Rectangle 51.png';
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
        linkText="GET PLANTING"
        title="Plants are our Passion"
        description="Even if you don’t have a green thumb, you can still have a green
            home."
      />
      <SaleCard
        saleValue={25}
        title="String of Hearts"
        newPrice={350}
        oldPrice={450}
        imgSrc={img}
      />
      <CatalogCard title="Marble Queen" price={350} imgSrc={img} />
      <CategoryCard title="BONSAI" imgSrc={img} />
      <BestSellCard title="INDOOR PLANTS" imgSrc={img} />
      <Footer />
    </QueryClientProvider>
  );
}
