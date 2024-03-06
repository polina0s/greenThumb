import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { SectionBanner } from '../../components/sectionBanner';
import { RadioFilter } from '../../widgets/radioFitler';
// import { SelectSort } from '../../widgets/select';

export function CatalogPage() {
  return (
    <>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <SectionBanner
        title="Shop"
        description="Find the perfect plant for your space"
      />
      {/* <SelectSort /> */}
      <RadioFilter title="Include" />
      <Footer />
    </>
  );
}
