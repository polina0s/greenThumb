import classNames from 'classnames';

import classes from './link.module.scss';

export function Link({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) {
  const LinkClass = classNames(classes.link, className);

  return (
    <a className={LinkClass} {...props}>
      {children}
    </a>
  );
}
