import { useClickAway } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';
import { Popover } from 'react-tiny-popover';

import { getShopItems } from '../../../../store/shopItems/shopItems.actions';
import { useAppDispatch } from '../../../../store/store';
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
    setOpen(false);
  });

  const handleOnBasketClick = () => {
    if (open === false) {
      setOpen(true);
    }
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getShopItems());
  }, [dispatch]);

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
