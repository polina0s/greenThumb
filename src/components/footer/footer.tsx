import { Social } from '../social';
import footer from './footer.module.scss';

interface FooterProps {
  variant?: 'white' | 'green';
}

export function Footer({ variant = 'green' }: FooterProps) {
  // const containerClassName = clsx(footer.cont, {footer.contGreen: variant === 'green', })

  return (
    <div className={footer.cont}>
      <div className={footer.footer}>
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
        <Social />
      </div>
      <div className={footer.border}>
        COPYRIGHT GREEN THUMB. ALL RIGHTS RESERVED
      </div>
    </div>
  );
}
