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
  variant?: 'simpleOption' | 'buttonOption';
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export const RadioInput = React.forwardRef<HTMLInputElement, RadioInputProps>(
  function RadioInput(
    {
      value,
      name,
      label,
      className,
      checked,
      disabled,
      variant = 'simpleOption',
      onChange,
    },
    ref,
  ) {
    const ContClass = classNames(classes.cont, className);

    if (variant === 'simpleOption')
      return (
        <div className={ContClass}>
          <input
            name={name}
            ref={ref}
            className={classes.simpleOption}
            type="radio"
            value={value}
            id={value}
            onChange={onChange}
          />
          <label className={classes.simpleOptionName} htmlFor={value}>
            {label}
          </label>
        </div>
      );

    if (variant === 'buttonOption')
      return (
        <label>
          <input
            className={classes.buttonOption}
            type="radio"
            name={name}
            value={value}
            onChange={onChange}
            checked={checked}
            disabled={disabled}
          />
          <div className={classes.optionButtonBox}>
            <span className={classes.optionButtonSize}>{value}</span>
          </div>
        </label>
      );
  },
);
