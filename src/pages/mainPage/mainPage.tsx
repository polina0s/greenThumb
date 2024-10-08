import { useNavigate } from 'react-router-dom';

import { Banner } from '../../components/banner/banner';
import { Footer } from '../../components/footer';
import { BestSelling } from '../../widgets/bestSelling';
import { Categories } from '../../widgets/categories';
import { Header } from '../../widgets/header';
import { Hottest } from '../../widgets/hottest';
import { SaleSection } from '../../widgets/saleSection';
import { Testimonials } from '../../widgets/testimonials';
import classes from './main.page.module.scss';

export function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.wrapper}>
        <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
        <div className={classes.banner}>
          <Banner
            title="Plants are our Passion"
            description="Even if you don’t have a green thumb, you can still have a green home."
            linkText="GET PLANTING"
            onClick={() => navigate('/catalog')}
          />
        </div>
        <div className={classes.categories}>
          <Categories />
        </div>
        <div className={classes.bestSelling}>
          <BestSelling />
        </div>
        <div className={classes.hottest}>
          <Hottest />
        </div>
        <div className={classes.ferntastic}>
          <SaleSection firstWord="Ferntastic&nbsp;" secondWord="Deals" />
        </div>
        <div className={classes.testimonials}>
          <Testimonials />
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}
