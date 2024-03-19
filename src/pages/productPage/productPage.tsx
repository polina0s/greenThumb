import { useParams } from 'react-router-dom';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { PageCard } from '../../components/pageCard';
import classes from './productPage.module.scss';

export function ProductPage() {
  const { id } = useParams();
  return (
    <div id={id} className={classes.cont}>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <PageCard
        name="Marble Queen Pothos"
        price={350}
        description="Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners."
      />
      <Footer variant="green" />
    </div>
  );
}
