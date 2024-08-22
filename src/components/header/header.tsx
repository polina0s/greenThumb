import { Link } from '../link';
import { BasketPopover } from './components/basketPopover/basketPopover';
import { Logo } from './components/logo';
import { Promo } from './components/promo';
import classes from './header.module.scss';

export function Header({ promoTitle }: { promoTitle: string }) {
  const basket = JSON.parse(localStorage.getItem('basket')) || [];

  const handleDeleteItem = () => {
    localStorage.setItem('basket', JSON.stringify(basket));
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
