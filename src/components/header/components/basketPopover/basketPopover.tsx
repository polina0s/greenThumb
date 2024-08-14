import { useClickAway } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';
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
  handleDeleteItem?: () => void;
  basketQuantity?: number;
  basketItems?: Item[];
}

export function BasketPopover({
  defaultOpen,
  basketItems,
  handleDeleteItem,
  basketQuantity,
}: BasketPopoverProps) {
  const [open, setOpen] = useState(defaultOpen);

  const ref = useClickAway<HTMLDivElement>((e) => {
    console.log(e.target);
    setOpen(false);
  });

  const handleOnBasketClick = () => {
    if (open === false) {
      setOpen(true);
    }
  };

  useEffect(() => {
    fetch('http://localhost:8000/plants/4', {}).then((res) =>
      console.log(res.json()),
    );
  }, []);

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
                handleDeleteItem={handleDeleteItem}
              />
            );
          })}
        </div>
      }
    >
      <SearchBar
        basketQuantity={basketQuantity}
        handleOnBasketClick={handleOnBasketClick}
      />
    </Popover>
  );
}
