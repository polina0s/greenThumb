import classNames from 'classnames';

import { Link } from '../../ui/link';
import { Copyrights } from './components/copyrights';
import { Social } from './components/social';
import footer from './footer.module.scss';

interface FooterProps {
  variant?: 'white' | 'green';
}

export function Footer({ variant = 'white' }: FooterProps) {
  const footerVariant = classNames({
    [footer.cont]: true,
    [footer['footer--green']]: variant === 'green',
  });

  return (
    <div>
      <div className={footerVariant}>
        <div className={footer.navigation}>
          <Link href="#" className={footer.navLink}>
            Products
          </Link>
          <Link href="#" className={footer.navLink}>
            Returns
          </Link>
          <Link href="#" className={footer.navLink}>
            FAQ
          </Link>
          <Link href="#" className={footer.navLink}>
            Shipping
          </Link>
          <Link href="#" className={footer.navLink}>
            About us
          </Link>
          <Link href="#" className={footer.navLink}>
            Contact us
          </Link>
        </div>
        <div className={footer.social}>
          <Social />
        </div>
      </div>
      <Copyrights />
    </div>
  );
}
