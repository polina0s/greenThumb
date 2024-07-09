import { useClickAway } from '@uidotdev/usehooks';
import { useState } from 'react';
import { Popover } from 'react-tiny-popover';

import { BasketCard } from '../basketCard';
import { SearchBar } from '../searchBar';
import classes from './basketPopover.module.scss';

type Item = {
  price?: number;
  img?: string;
  id?: number;
  name?: string;
  quantity?: number;
};

interface BasketPopoverProps {
  defaultOpen: boolean;
  basketItems: Item[];
}

export function BasketPopover({
  defaultOpen,
  basketItems,
}: BasketPopoverProps) {
  const [open, setOpen] = useState(defaultOpen);

  const ref = useClickAway<HTMLDivElement>(() => setOpen(false));

  return (
    <Popover
      isOpen={open}
      positions={['bottom', 'left']}
      align="end"
      content={
        <div className={classes.popover} ref={ref}>
          {basketItems.map((item) => {
            return (
              <BasketCard
                key={item.id}
                img={item.img}
                price={item.price}
                name={item.name}
                quantity={item.quantity}
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
