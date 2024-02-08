import { Link } from '../../ui/link';
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
            <Link href="#">Home</Link>
            <Link href="#">Products</Link>
            <Link href="#"> About us</Link>
            <Link href="#">Contact us</Link>
          </div>
          <SearchBar basketValue={3} />
        </div>
      </div>
    </div>
  );
}
