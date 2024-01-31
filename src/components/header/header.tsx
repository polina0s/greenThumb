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
            <a className={header.navLink} href="#">
              Home
            </a>
            <a className={header.navLink} href="#">
              Products
            </a>
            <a className={header.navLink} href="#">
              About us
            </a>
            <a className={header.navLink} href="#">
              Contact us
            </a>
          </div>
          <SearchBar basketValue={3} />
        </div>
      </div>
    </div>
  );
}
