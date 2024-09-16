import queryString from 'query-string';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Cart from '../../../../assets/images/cart.svg';
import Line from '../../../../assets/images/line.svg';
import Search from '../../../../assets/images/search.svg';
import { Input } from '../../../../components/input';
import { Text } from '../../../../components/text';
import { allShopItemsSelector } from '../../../../store/shopItems';
import classes from './searchBar.module.scss';

interface SearchBarProps {
  cartQuantity: number;
  handleOnCartClick?: () => void;
}

export const SearchBar = forwardRef<HTMLDivElement, SearchBarProps>(
  function SearchBar({ cartQuantity, handleOnCartClick }, ref) {
    const [searchParams, setSearchParams] = useSearchParams();
    const { isLoading } = useSelector(allShopItemsSelector);

    const [searchValue, setSearchValue] = useState(
      searchParams.get('search' || null),
    );
    const navigate = useNavigate();

    const onSearchButtonClick = useCallback(() => {
      if (isLoading === false) {
        navigate('/catalog');
        setSearchParams((prev) => {
          return queryString.stringify({
            ...Object.fromEntries(prev),
            search: searchValue,
          });
        });
      }
    }, [navigate, searchValue, setSearchParams, isLoading]);

    useEffect(() => {
      function handleKeyUp(e: KeyboardEvent) {
        if (e.key === 'Enter' || e.key === '13') {
          onSearchButtonClick();
        }
      }

      window.addEventListener('keyup', (e) => handleKeyUp(e));
      return () => window.removeEventListener('keyup', (e) => handleKeyUp(e));
    }, [onSearchButtonClick]);

    return (
      <div className={classes.cont} ref={ref}>
        <div>
          <Input
            id="search"
            description="Search"
            type="text"
            value={searchValue === null ? '' : searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            rightIcon={
              <button
                id="searchButton"
                className={classes.searchButton}
                onClick={() => onSearchButtonClick()}
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
