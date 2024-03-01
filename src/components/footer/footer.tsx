import classNames from 'classnames';

import { Link } from '../link';
import { Copyrights } from './components/copyrights';
import { Social } from './components/social';
import classes from './footer.module.scss';

interface FooterProps {
  variant?: 'white' | 'green';
}

export function Footer({ variant = 'white' }: FooterProps) {
  const footerVariant = classNames({
    [classes.cont]: true,
    [classes['footer--green']]: variant === 'green',
  });

  return (
    <div>
      <div className={footerVariant}>
        <div className={classes.navigation}>
          <Link href="#" className={classes.navLink}>
            Products
          </Link>
          <Link href="#" className={classes.navLink}>
            Returns
          </Link>
          <Link href="#" className={classes.navLink}>
            FAQ
          </Link>
          <Link href="#" className={classes.navLink}>
            Shipping
          </Link>
          <Link href="#" className={classes.navLink}>
            About us
          </Link>
          <Link href="#" className={classes.navLink}>
            Contact us
          </Link>
        </div>
        <div className={classes.social}>
          <Social />
        </div>
      </div>
      <Copyrights />
    </div>
  );
}
