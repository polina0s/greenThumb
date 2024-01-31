import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'md' | 'sm';
  color?: 'white' | 'green';
  // children?: ReactNode | undefined
}

export function Button({
  children,
  color,
  size,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  return <button {...props}>{children}</button>;
}
