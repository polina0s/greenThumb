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

const plants = [
  { id: 1, name: 'Marble Queen Pothos' },
  { id: 2, name: 'Neon Pothos' },
  { id: 3, name: 'Syngonium Rayii' },
  { id: 4, name: 'Peruvian Cactus' },
  { id: 5, name: 'Pineapple' },
  { id: 6, name: 'African Milk Tree' },
  { id: 7, name: 'Pothos' },
  { id: 8, name: 'Chinese Evergreen' },
  { id: 9, name: 'String of Hearts' },
  { id: 10, name: 'Red Secret Alocasia' },
];
type PlantsProps = {
  id: number;
  name: string;
};

export function searchPlant({
  array,
  string,
}: {
  array: PlantsProps[];
  string: string;
}) {
  const found: PlantsProps[] = array.filter((plant) => {
    return plant.name.toLowerCase().includes(string.toLowerCase());
  });

  return found;
}

searchPlant({ array: plants, string: 'marble' });

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
