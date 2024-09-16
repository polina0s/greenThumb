import { forwardRef, ReactNode } from 'react';

import classes from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  description?: string;
  type?: string;
  rightIcon?: ReactNode;
}

export const Input = forwardRef<HTMLDivElement, InputProps>(function Input(
  { id, description, type, rightIcon, ...props },
  ref,
) {
  return (
    <div ref={ref} className={classes.cont}>
      <input
        id={id}
        className={classes.input}
        type={type}
        placeholder={description}
        {...props}
      />
      {rightIcon}
    </div>
  );
});
