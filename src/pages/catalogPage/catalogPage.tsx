import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { PageHeader } from '../../components/pageHeader';
// import classes from './catalogPage.module.scss';

export function CatalogPage() {
  return (
    <>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <PageHeader
        title="Shop"
        description="Find the perfect plant for your space"
      />
      <Footer />
    </>
  );
}
