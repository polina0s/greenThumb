import { Text } from '../../ui/text';
import { Logo } from './components/logo';
import { Promo } from './components/promo';
import { SearchBar } from './components/searchBar';
import header from './header.module.scss';

export function Header({ promoTitle }: { promoTitle: string }) {
  return (
    <div className={header.header}>
      <Promo title={promoTitle} />
      <div className={header.navigation}>
        <div className={header.navContainer}>
          <Logo />
          <div className={header.navbar}>
            <Text
              variant="openSansRegularSM"
              element="a"
              color="black"
              className={header.navLink}
            >
              Home
            </Text>
            <Text
              variant="openSansRegularSM"
              element="a"
              color="black"
              className={header.navLink}
            >
              Products
            </Text>
            <Text
              variant="openSansRegularSM"
              element="a"
              color="black"
              className={header.navLink}
            >
              About us
            </Text>
            <Text
              variant="openSansRegularSM"
              element="a"
              color="black"
              className={header.navLink}
            >
              Contact us
            </Text>
          </div>
          <SearchBar basketValue={3} />
        </div>
      </div>
    </div>
  );
}
