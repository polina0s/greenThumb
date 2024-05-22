import { useParams } from 'react-router-dom';

import img from '../../assets/images/Rectangle 51.png';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { ProductCard } from '../../components/productCard';
import classes from './productPage.module.scss';

const images = [
  { src: img, alt: 'Marble Queen Pothos', id: 1 },
  { src: img, alt: 'Marble Queen Pothos', id: 2 },
  { src: img, alt: 'Marble Queen Pothos', id: 3 },
  { src: img, alt: 'Marble Queen Pothos', id: 4 },
];

export function ProductPage() {
  const { id } = useParams();
  return (
    <div id={id} className={classes.cont}>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <ProductCard
        images={images}
        name="Marble Queen Pothos"
        price={350}
        description="Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners."
      />
      <Footer variant="green" />
    </div>
  );
}
