import { useClickAway } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Popover } from 'react-tiny-popover';

import { Text } from '../../../../components/text';
import { allCartSelector } from '../../../../store/cart';
import {
  deleteItemFromCart,
  getCartItems,
} from '../../../../store/cart/cart.actions';
import { useAppDispatch } from '../../../../store/store';
import { CartCard } from '../cartCard';
import { SearchBar } from '../searchBar';
import classes from './cartPopover.module.scss';

type Item = {
  price?: number;
  img?: string;
  id?: number;
  name?: string;
  quantity?: number;
};

interface CartPopoverProps {
  defaultOpen: boolean;
  cartQuantity?: number;
  cartItems?: Item[];
}

export function CartPopover({ defaultOpen }: CartPopoverProps) {
  const [open, setOpen] = useState(defaultOpen);
  const cart = useSelector(allCartSelector);
  const dispatch = useAppDispatch();
  const cartQuantity = cart.itemsQuantity;
  const cartItems = cart.items;

  const ref = useClickAway<HTMLDivElement>(() => {
    setOpen(false);
  });

  useEffect(() => {
    if (open) {
      dispatch(getCartItems());
    }
  }, [dispatch, open]);

  const handleOnCartClick = () => {
    setOpen((oldState) => {
      if (!oldState) {
        return true;
      }
      return oldState;
    });
  };

  const handleDeleteItemFromCart = (id: number) => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <Popover
      isOpen={open}
      positions={['bottom', 'left']}
      align="end"
      content={
        <div className={classes.popover} ref={ref}>
          {cartItems.length > 0 ? (
            <div className={classes.cardsCont}>
              {cartItems.map((item) => {
                return (
                  <CartCard
                    key={item.id + '_' + item.quantity}
                    img={item.img}
                    price={item.price}
                    name={item.name}
                    quantity={item.quantity}
                    handleDeleteItem={() => handleDeleteItemFromCart(item.id)}
                  />
                );
              })}
            </div>
          ) : (
            <div className={classes.cartMessage}>
              <Text variant="poppinsMedium" color="white">
                Cart is empty
              </Text>
            </div>
          )}
        </div>
      }
    >
      <SearchBar
        cartQuantity={cartQuantity}
        handleOnCartClick={handleOnCartClick}
      />
    </Popover>
  );
}
