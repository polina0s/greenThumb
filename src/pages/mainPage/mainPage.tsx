import { Banner } from '../../components/banner/banner';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Categories } from '../../widgets/categories';

export function MainPage() {
  return (
    <>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <Banner
        title="Plants are our Passion"
        description="Even if you don’t have a green thumb, you can still have a green home."
        linkText="GET PLANTING"
      />
      <Categories />
      <Footer />
    </>
  );
}
