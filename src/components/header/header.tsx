import { useClickAway } from '@uidotdev/usehooks';
import { useState } from 'react';
import { Popover } from 'react-tiny-popover';

import img from '../../assets/images/image 10.png';
import { Link } from '../link';
import { QuantitySelector } from '../quantitySelector';
import { Logo } from './components/logo';
import { Promo } from './components/promo';
import { SearchBar } from './components/searchBar';
import classes from './header.module.scss';

export function Header({ promoTitle }: { promoTitle: string }) {
  const [open, setOpen] = useState(false);

  const ref = useClickAway<HTMLElement>(() => setOpen(false));

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
            ref={ref}
            isOpen={open}
            positions={['bottom', 'left']}
            align="end"
            content={
              <div className={classes.popover}>
                <div className={classes.basketCard}>
                  <img className={classes.basketCardImg} src={img} alt="" />
                  <div>
                    <p className={classes.basketCardName}>
                      Marble Queen Pothos
                    </p>
                    <div className={classes.basketCardInfo}>
                      <QuantitySelector
                        variant="small"
                        min={1}
                        max={10}
                        defaultValue={1}
                      />
                      <p className={classes.basketCardPrice}>$350</p>
                    </div>
                  </div>
                </div>
              </div>
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
