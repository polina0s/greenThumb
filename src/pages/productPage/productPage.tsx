import { useParams } from 'react-router-dom';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { ProductCard } from '../../components/productCard';
import { SectionBanner } from '../../components/sectionBanner';
import classes from './productPage.module.scss';

export function ProductPage() {
  const { id } = useParams();

  return (
    <div id={id} className={classes.cont}>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <div className={classes.sectionBanner}>
        <SectionBanner title="Plant" description="Marble Queen Pothos" />
      </div>
      <div className={classes.card}>
        <ProductCard />
      </div>
      <Footer variant="green" />
    </div>
  );
}
