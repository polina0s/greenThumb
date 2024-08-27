import { useNavigate } from 'react-router-dom';

import { Link } from '../link';
import { BasketPopover } from './components/basketPopover/basketPopover';
import { Logo } from './components/logo';
import { Promo } from './components/promo';
import classes from './header.module.scss';

export function Header({ promoTitle }: { promoTitle: string }) {
  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  const navigate = useNavigate();

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
            <Link onClick={() => navigate('/')}>Home</Link>
            <Link onClick={() => navigate('catalog')}>Products</Link>
            <Link> About us</Link>
            <Link>Contact us</Link>
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
