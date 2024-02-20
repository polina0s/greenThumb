import classNames from 'classnames';

import link from './link.module.scss';

export function Link({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) {
  const LinkClass = classNames(
    {
      [link.link]: true,
    },
    className,
  );

  return (
    <a className={LinkClass} {...props}>
      {children}
    </a>
  );
}
