import { useClickAway } from '@uidotdev/usehooks';
import { useState } from 'react';
import { Popover } from 'react-tiny-popover';

import img from '../../assets/images/image 10.png';
import { Link } from '../link';
import { BasketCard } from './components/basketCard';
import { Logo } from './components/logo';
import { Promo } from './components/promo';
import { SearchBar } from './components/searchBar';
import classes from './header.module.scss';

const basket = [
  { img: img, price: 350, name: 'Marble Queen Pothos', quantity: 1, id: 1 },
  { img: img, price: 350, name: 'Marble Queen Pothos', quantity: 8, id: 2 },
];

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
                {basket.map((card) => {
                  return (
                    <BasketCard
                      key={card.id}
                      img={card.img}
                      price={card.price}
                      name={card.name}
                      quantity={card.quantity}
                    />
                  );
                })}
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
