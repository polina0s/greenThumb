import { useParams } from 'react-router-dom';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { ModalImageGallery } from '../../components/modalImageGallery';
import { ProductCard } from '../../components/productCard';
import classes from './productPage.module.scss';

export function ProductPage() {
  const { id } = useParams();
  return (
    <div id={id} className={classes.cont}>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <ProductCard />
      <ModalImageGallery />
      <Footer variant="green" />
    </div>
  );
}
