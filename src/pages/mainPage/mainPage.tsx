import img from '../../assets/images/Rectangle 51.png';
import { Banner } from '../../components/banner/banner';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { BestSelling } from '../../widgets/bestSelling';
import { Categories } from '../../widgets/categories';
import { Ferntastic } from '../../widgets/ferntastic';
import { Hottest } from '../../widgets/hottest';
import { Testimonials } from '../../widgets/testimonials';
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

const hottest = [
  { title: 'Marble Queen', price: 350, imgSrc: img, id: '1' },
  { title: 'Neon Pothos', price: 350, imgSrc: img, id: '2' },
  { title: 'Syngonium Rayii', price: 350, imgSrc: img, id: '3' },
  { title: 'Peruvian Cactus', price: 350, imgSrc: img, id: '4' },
  { title: 'Pineapple', price: 350, imgSrc: img, id: '5' },
  { title: 'African Milk Tree', price: 350, imgSrc: img, id: '6' },
  { title: 'Pothos', price: 350, imgSrc: img, id: '7' },
  { title: 'Chinese Evergreen', price: 350, imgSrc: img, id: '8' },
];

const ferntastic = [
  {
    id: '1',
    saleValue: 25,
    title: 'String of Hearts',
    newPrice: 350,
    oldPrice: 450,
    imgSrc: img,
  },
  {
    id: '2',
    saleValue: 25,
    title: 'Red Secret Alocasia',
    newPrice: 350,
    oldPrice: 450,
    imgSrc: img,
  },
  {
    id: '3',
    saleValue: 25,
    title: 'Jewel Alocasia',
    newPrice: 350,
    oldPrice: 450,
    imgSrc: img,
  },
  {
    id: '4',
    saleValue: 25,
    title: 'Hoya Retusa',
    newPrice: 350,
    oldPrice: 450,
    imgSrc: img,
  },
];

const testimonials = [
  { imgSrc: img, title: 'Healthy, happy plants', name: 'Luisa', id: '1' },
  {
    imgSrc: img,
    title: 'Recommend to all my plant friends',
    name: 'Edoardo',
    id: '2',
  },
  {
    imgSrc: img,
    title: 'I turned my house into my dream jungle',
    name: 'Mart',
    id: '3',
  },
];

export function MainPage() {
  return (
    <>
      <Header promoTitle="FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28." />
      <div className={classes.banner}>
        <Banner
          title="Plants are our Passion"
          description="Even if you don’t have a green thumb, you can still have a green home."
          linkText="GET PLANTING"
        />
      </div>
      <div className={classes.categories}>
        <Categories cards={categories} />
      </div>
      <div className={classes.bestSelling}>
        <BestSelling cards={bestSelling} />
      </div>
      <div className={classes.hottest}>
        <Hottest cards={hottest} />
      </div>
      <div className={classes.ferntastic}>
        <Ferntastic cards={ferntastic} />
      </div>
      <div className={classes.testimonials}>
        <Testimonials cards={testimonials} />
      </div>
      <Footer />
    </>
  );
}
