import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { SectionBanner } from '../../components/sectionBanner';
import { SelectSort } from '../../widgets/select';
import { CatalogFilters } from '../../widgets/сatalogFilters/сatalogFilters';

export function CatalogPage() {
  return (
    <>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <SectionBanner
        title="Shop"
        description="Find the perfect plant for your space"
      />
      <CatalogFilters minPrice="100" maxPrice="1000" />
      <SelectSort />

      <Footer />
    </>
  );
}
