import img from '../../assets/images/Rectangle 51.png';
import { Banner } from '../../components/banner/banner';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { BestSelling } from '../../widgets/bestSelling';
import { Categories } from '../../widgets/categories';
import classes from './main.page.module.scss';

const categories = [
  { imgSrc: img, title: 'bonsai', id: '1' },
  { imgSrc: img, title: 'bonsai', id: '2' },
  { imgSrc: img, title: 'bonsai', id: '3' },
  { imgSrc: img, title: 'bonsai', id: '4' },
  { imgSrc: img, title: 'bonsai', id: '5' },
  { imgSrc: img, title: 'bonsai', id: '6' },
];

const bestSelling = [
  { imgSrc: img, title: 'Indoor Plants', id: '1' },
  { imgSrc: img, title: 'Air Purifying Plants', id: '2' },
  { imgSrc: img, title: 'Flowering Plants', id: '3' },
];

export function MainPage() {
  return (
    <>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <Banner
        title="Plants are our Passion"
        description="Even if you don’t have a green thumb, you can still have a green home."
        linkText="GET PLANTING"
      />
      <div className={classes.categories}>
        <Categories cards={categories} />
      </div>
      <div className={classes.bestSelling}>
        <BestSelling cards={bestSelling} />
      </div>
      <Footer />
    </>
  );
}
