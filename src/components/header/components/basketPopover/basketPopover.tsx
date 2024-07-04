import { useClickAway } from '@uidotdev/usehooks';
import { useState } from 'react';
import { Popover } from 'react-tiny-popover';

import img from '../../../../assets/images/image 10.png';
import { BasketCard } from '../basketCard';
import { SearchBar } from '../searchBar';
import classes from './basketPopover.module.scss';

const basket = [
  { img: img, price: 350, name: 'Marble Queen Pothos', quantity: 1, id: 1 },
  { img: img, price: 350, name: 'Marble Queen Pothos', quantity: 8, id: 2 },
];

interface BasketPopoverProps {
  defaultOpen: boolean;
}

export function BasketPopover({ defaultOpen }: BasketPopoverProps) {
  const [open, setOpen] = useState(defaultOpen);

  const ref = useClickAway<HTMLDivElement>(() => setOpen(false));

  return (
    <Popover
      isOpen={open}
      positions={['bottom', 'left']}
      align="end"
      content={
        <div className={classes.popover} ref={ref}>
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
      <SearchBar basketValue={3} handleOnBasketClick={() => setOpen(!open)} />
    </Popover>
  );
}
