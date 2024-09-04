import classNames from 'classnames';
import { forwardRef } from 'react';

import classes from './radioInput.module.scss';

interface RadioInputProps {
  value: string;
  name: string;
  label: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  function RadioInput(
    { value, name, label, className, checked, onChange },
    ref,
  ) {
    const ContClass = classNames(classes.cont, className);

    return (
      <div className={ContClass}>
        <input
          name={name}
          ref={ref}
          className={classes.input}
          type="radio"
          value={value}
          checked={checked}
          id={value}
          onChange={onChange}
        />
        <label className={classes.inputName} htmlFor={value}>
          {label}
        </label>
      </div>
    );
  },
);
