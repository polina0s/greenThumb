import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Banner } from '../../components/banner/banner';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { RootState } from '../../store/store';
import { BestSelling } from '../../widgets/bestSelling';
import { Categories } from '../../widgets/categories';
import { Ferntastic } from '../../widgets/ferntastic';
import { Hottest } from '../../widgets/hottest';
import { Testimonials } from '../../widgets/testimonials';
import classes from './main.page.module.scss';

export function MainPage() {
  const navigate = useNavigate();
  const isCategoriesLoading = useSelector(
    (state: RootState) => state.categories.isLoading,
  );
  const isBestSellLoading = useSelector(
    (state: RootState) => state.bestSellCategories.isLoading,
  );
  const isHottestLoading = useSelector(
    (state: RootState) => state.shopItems.isLoading,
  );
  const isFerntasticLoading = useSelector(
    (state: RootState) => state.saleItems.isLoading,
  );
  const isTestimonialsLoading = useSelector(
    (state: RootState) => state.testimonials.isLoading,
  );

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
          <Categories isLoading={isCategoriesLoading} />
        </div>
        <div className={classes.bestSelling}>
          <BestSelling isLoading={isBestSellLoading} />
        </div>
        <div className={classes.hottest}>
          <Hottest isLoading={isHottestLoading} />
        </div>
        <div className={classes.ferntastic}>
          <Ferntastic isLoading={isFerntasticLoading} />
        </div>
        <div className={classes.testimonials}>
          <Testimonials isLoading={isTestimonialsLoading} />
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}
