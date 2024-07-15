import { forwardRef } from 'react';

import Basket from '../../../../assets/images/basket.svg';
import Line from '../../../../assets/images/line.svg';
import Search from '../../../../assets/images/search.svg';
import { Input } from '../../../input';
import { Text } from '../../../text';
import classes from './searchBar.module.scss';

interface SearchBarProps {
  basketQuantity: number;
  handleOnBasketClick: () => void;
}

export const SearchBar = forwardRef<HTMLDivElement, SearchBarProps>(
  function SearchBar({ basketQuantity, handleOnBasketClick }, ref) {
    return (
      <div className={classes.cont} ref={ref}>
        <Input defaultValue="Search" type="text" />
        <button className={classes.searchButton}>
          <Search />
        </button>
        <Line />
        <button className={classes.basketButton} onClick={handleOnBasketClick}>
          <Basket />
        </button>
        <Text variant="openSansRegularSM" className={classes.basketQuantity}>
          {basketQuantity}
        </Text>
      </div>
    );
  },
);
