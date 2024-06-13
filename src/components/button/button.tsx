import classNames from 'classnames';

import classes from './button.module.scss';

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
      [classes.button]: true,
      [classes['white']]: color === 'white',
      [classes['green']]: color === 'green',
      [classes['sm']]: size === 'sm',
      [classes['md']]: size === 'md',
      [classes['lg']]: size === 'lg',
      [classes['xl']]: size === 'xl',
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
