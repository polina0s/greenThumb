import classNames from 'classnames/bind';

import { Copyrights } from './components/copyrights';
import { Social } from './components/social';
import footer from './footer.module.scss';

const cx = classNames.bind(footer);
interface FooterProps {
  variant?: 'white' | 'green';
}

export function Footer({ variant = 'white' }: FooterProps) {
  const footerVariant = cx({
    [footer.cont]: true,
    [footer['footer--green']]: variant === 'green',
  });

  return (
    <div>
      <div className={footerVariant}>
        <div className={footer.navigation}>
          <a className={footer.navLink} href="#">
            Products
          </a>
          <a className={footer.navLink} href="#">
            Returns
          </a>
          <a className={footer.navLink} href="#">
            FAQ
          </a>
          <a className={footer.navLink} href="#">
            Shipping
          </a>
          <a className={footer.navLink} href="#">
            About us
          </a>
          <a className={footer.navLink} href="#">
            Contact us
          </a>
        </div>
        <div className={footer.social}>
          <Social />
        </div>
      </div>
      <Copyrights />
    </div>
  );
}
