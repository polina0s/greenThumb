import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { allCartSelector } from '../../store/cart';
import { getCartItems } from '../../store/cart/cart.actions';
import { useAppDispatch } from '../../store/store';
import { Link } from '../link';
import { Text } from '../text';
import { CartPopover } from './components/cartPopover';
import { Logo } from './components/logo';
import { Promo } from './components/promo';
import classes from './header.module.scss';

export function Header({ promoTitle }: { promoTitle: string }) {
  const dispatch = useAppDispatch();
  const cart = useSelector(allCartSelector);

  const handleDeleteItem = () => {
    console.log(cart);
  };

  const cartQuantity = cart.items.length;

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

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
            cartItems={cart.items}
            cartQuantity={cartQuantity}
            handleDeleteItem={handleDeleteItem}
          />
        </div>
      </div>
    </div>
  );
}
