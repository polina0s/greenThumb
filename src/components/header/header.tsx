import { Link as RouterLink } from 'react-router-dom';

import { Link } from '../link';
import { Text } from '../text';
import { CartPopover } from './components/cartPopover';
import { Logo } from './components/logo';
import { Promo } from './components/promo';
import classes from './header.module.scss';

export function Header({ promoTitle }: { promoTitle: string }) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const handleDeleteItem = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const cartQuantity = cart.length;

  return (
    <div className={classes.header}>
      <Promo title={promoTitle} />
      <div className={classes.navigation}>
        <div className={classes.navContainer}>
          <RouterLink to={'/'} className={classes.link}>
            <Logo />
          </RouterLink>
          <div className={classes.navbar}>
            <RouterLink to={'/'} className={classes.link}>
              <Text variant="openSansRegularSM">Home</Text>
            </RouterLink>
            <RouterLink to={'/catalog'} className={classes.link}>
              <Text variant="openSansRegularSM">Products</Text>
            </RouterLink>
            <Link> About us</Link>
            <Link>Contact us</Link>
          </div>
          <CartPopover
            defaultOpen={false}
            cartItems={cart}
            cartQuantity={cartQuantity}
            handleDeleteItem={handleDeleteItem}
          />
        </div>
      </div>
    </div>
  );
}
