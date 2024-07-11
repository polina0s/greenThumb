// import img from '../../assets/images/image 10.png';
import { Link } from '../link';
import { BasketPopover } from './components/basketPopover/basketPopover';
import { Logo } from './components/logo';
import { Promo } from './components/promo';
import classes from './header.module.scss';

// const basketItems = [
//   { img: img, price: 350, name: 'Marble Queen Pothos', quantity: 1, id: 1 },
//   { img: img, price: 350, name: 'Marble Queen Pothos', quantity: 8, id: 2 },
// ];

export function Header({ promoTitle }: { promoTitle: string }) {
  const basket = JSON.parse(localStorage.getItem('basket')) || [];

  const handleDeleteItem = () => {
    localStorage.setItem('basket', JSON.stringify(basket));
    console.log(basket);
  };

  const basketQuantity = basket.length;

  return (
    <div className={classes.header}>
      <Promo title={promoTitle} />
      <div className={classes.navigation}>
        <div className={classes.navContainer}>
          <Logo />
          <div className={classes.navbar}>
            <Link href="#">Home</Link>
            <Link href="#">Products</Link>
            <Link href="#"> About us</Link>
            <Link href="#">Contact us</Link>
          </div>
          <BasketPopover
            defaultOpen={false}
            basketItems={basket}
            basketQuantity={basketQuantity}
            handleDeleteItem={handleDeleteItem}
          />
        </div>
      </div>
    </div>
  );
}
