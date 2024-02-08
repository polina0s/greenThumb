import classNames from 'classnames';

import link from './link.module.scss';

interface LinkProps {
  className?: string;
  href: string;
}

export function Link({
  children,
  href,
  className,
}: React.PropsWithChildren<LinkProps>) {
  const LinkClass = classNames(
    {
      [link.link]: true,
    },
    className,
  );

  return (
    <a href={href} className={LinkClass}>
      {children}
    </a>
  );
}
