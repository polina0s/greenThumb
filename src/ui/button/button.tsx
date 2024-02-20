import classNames from 'classnames';
import * as React from 'react';

import button from './button.module.scss';

interface BaseProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'white' | 'green';
}

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  element?: 'a';
}

interface ButtonProps1 extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  element?: 'button';
}

type MyButtonProps = (AnchorProps | ButtonProps1) & BaseProps;

export function Button({
  children,
  color = 'white',
  size = 'xl',
  element = 'button',
  className,
  ...props
}: React.PropsWithChildren<MyButtonProps>) {
  const btnClass = classNames(
    {
      [button.button]: true,
      [button['white']]: color === 'white',
      [button['green']]: color === 'green',
      [button['sm']]: size === 'sm',
      [button['md']]: size === 'md',
      [button['lg']]: size === 'lg',
      [button['xl']]: size === 'xl',
    },
    className,
  );

  if (element === 'a')
    return (
      <a
        className={btnClass}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );

  return (
    <button
      className={btnClass}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
