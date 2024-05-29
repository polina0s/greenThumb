import classNames from 'classnames';
import * as React from 'react';

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
export const RadioInput = React.forwardRef<HTMLInputElement, RadioInputProps>(
  function RadioInput({ value, name, label, className, onChange }, ref) {
    const ContClass = classNames(classes.cont, className);

    return (
      <div className={ContClass}>
        <input
          name={name}
          ref={ref}
          className={classes.input}
          type="radio"
          value={value}
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
