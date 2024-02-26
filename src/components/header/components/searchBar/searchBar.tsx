import Basket from '../../../../assets/images/basket.svg';
import Line from '../../../../assets/images/line.svg';
import Search from '../../../../assets/images/search.svg';
import { Input } from '../../../../ui/input';
import { Text } from '../../../../ui/text';
import classes from './searchBar.module.scss';

export function SearchBar({ basketValue }: { basketValue: number }) {
  return (
    <div className={classes.cont}>
      <Input defaultValue="Search" type="text" />
      <button className={classes.searchButton}>
        <Search />
      </button>
      <Line />
      <button className={classes.basketButton}>
        <Basket />
      </button>
      <Text variant="openSansRegularSM" className={classes.basketValue}>
        {basketValue}
      </Text>
    </div>
  );
}
