import { Logo } from '../logo';
import { SearchBar } from '../searchBar';
import header from './header.module.scss';

export function Header({ promoTitle }: { promoTitle: string }) {
  return (
    <>
      <div className={header.promoCont}>
        <p className={header.promoTitle}>{promoTitle}</p>
      </div>
      <div className={header.navigationCont}>
        <div className={header.logo}>
          <Logo />
        </div>
        <div className={header.navbar}>
          <a className={header.link} href="#">
            Home
          </a>
          <a className={header.link} href="#">
            Products
          </a>
          <a className={header.link} href="#">
            About us
          </a>
          <a className={header.link} href="#">
            Contact us
          </a>
        </div>
        <SearchBar basketValue={3} />
      </div>
    </>
  );
}
