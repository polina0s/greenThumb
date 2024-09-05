import { forwardRef } from 'react';

import Cart from '../../../../assets/images/cart.svg';
import Line from '../../../../assets/images/line.svg';
import Search from '../../../../assets/images/search.svg';
import { Input } from '../../../input';
import { Text } from '../../../text';
import classes from './searchBar.module.scss';

interface SearchBarProps {
  cartQuantity: number;
  handleOnCartClick: () => void;
}

export const SearchBar = forwardRef<HTMLDivElement, SearchBarProps>(
  function SearchBar({ cartQuantity, handleOnCartClick }, ref) {
    return (
      <div className={classes.cont} ref={ref}>
        <Input defaultValue="Search" type="text" />
        <button className={classes.searchButton}>
          <Search />
        </button>
        <Line />
        <button className={classes.cartButton} onClick={handleOnCartClick}>
          <Cart />
        </button>
        <Text variant="openSansRegularSM" className={classes.cartQuantity}>
          {cartQuantity}
        </Text>
      </div>
    );
  },
);
