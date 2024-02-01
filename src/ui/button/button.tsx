import classNames from 'classnames';
import * as React from 'react';

import button from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'white' | 'green';
}

export function Button({
  children,
  color = 'white',
  size = 'xl',
}: React.PropsWithChildren<ButtonProps>) {
  const btnClass = classNames({
    [button.button]: true,
    [button['white']]: color === 'white',
    [button['green']]: color === 'green',
    [button['sm']]: size === 'sm',
    [button['md']]: size === 'md',
    [button['lg']]: size === 'lg',
    [button['xl']]: size === 'xl',
  });

  return <button className={btnClass}>{children}</button>;
}
