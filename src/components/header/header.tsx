import { useState } from 'react';
import { Popover } from 'react-tiny-popover';

import { Link } from '../link';
import { Logo } from './components/logo';
import { Promo } from './components/promo';
import { SearchBar } from './components/searchBar';
import classes from './header.module.scss';

export function Header({ promoTitle }: { promoTitle: string }) {
  const [open, setOpen] = useState(false);

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
          <Popover
            isOpen={open}
            positions={['bottom']}
            align="center"
            content={
              <div className={classes.popover}>Hi! Im popover content.</div>
            }
          >
            <SearchBar
              basketValue={3}
              handleOnBasketClick={() => setOpen(!open)}
            />
          </Popover>
        </div>
      </div>
    </div>
  );
}
