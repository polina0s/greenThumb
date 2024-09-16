import { forwardRef } from 'react';

import Cart from '../../../../assets/images/cart.svg';
import Line from '../../../../assets/images/line.svg';
import Search from '../../../../assets/images/search.svg';
import { Input } from '../../../../components/input';
import { Text } from '../../../../components/text';
import classes from './searchBar.module.scss';

interface SearchBarProps {
  cartQuantity: number;
  searchValue?: string;
  handleOnCartClick?: () => void;
  handleOnSearchButtonClick?: () => void;
  handleChangeInputValue?: React.ChangeEventHandler<HTMLInputElement>;
}

export const SearchBar = forwardRef<HTMLDivElement, SearchBarProps>(
  function SearchBar(
    {
      cartQuantity,
      searchValue,
      handleOnCartClick,
      handleOnSearchButtonClick,
      handleChangeInputValue,
    },
    ref,
  ) {
    return (
      <div className={classes.cont} ref={ref}>
        <div>
          <Input
            id="search"
            description="Search"
            type="text"
            value={searchValue}
            onChange={handleChangeInputValue}
            rightIcon={
              <button
                className={classes.searchButton}
                onClick={handleOnSearchButtonClick}
              >
                <Search />
              </button>
            }
          />
        </div>
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
