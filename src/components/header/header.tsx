import { Logo } from '../logo';
import { SearchBar } from '../searchBar';
import header from './header.module.scss';

export function Header({ promoTitle }: { promoTitle: string }) {
  return (
    <div className={header.cont}>
      <div className={header.promoCont}>
        <p className={header.promoTitle}>{promoTitle}</p>
        <div className={header.promoInfo}>
          <p className={header.currency}>USD</p>
          <a className={header.supportLink} href="#">
            Support
          </a>
        </div>
      </div>
      <div className={header.navigationCont}>
        <div className={header.logo}>
          <Logo />
        </div>
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
  );
}
