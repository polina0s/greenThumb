import Basket from '../../../../assets/images/basket.svg';
import Line from '../../../../assets/images/line.svg';
import Search from '../../../../assets/images/search.svg';
import { Input } from '../../../../ui/input';
import { Text } from '../../../../ui/text';
import search from './searchBar.module.scss';

export function SearchBar({ basketValue }: { basketValue: number }) {
  return (
    <div className={search.cont}>
      <Input />
      <button className={search.searchButton}>
        <Search />
      </button>
      <Line />
      <button className={search.basketButton}>
        <Basket />
      </button>
      <Text variant="openSansRegularSM" className={search.basketValue}>
        {basketValue}
      </Text>
    </div>
  );
}
