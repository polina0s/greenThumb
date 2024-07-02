import * as classNames from 'classnames';
import { forwardRef, useState } from 'react';

import { Text } from '../text';
import classes from './quantitySelector.module.scss';

interface QuantitySelectorProps {
  min: number;
  max: number;
  variant?: 'small' | 'large';
  defaultValue: number;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (value: number) => void;
}

export const QuantitySelector = forwardRef<
  HTMLDivElement,
  QuantitySelectorProps
>(function QuantitySelector(
  { min, max, variant, defaultValue, onChange, onBlur },
  ref,
) {
  const [quantity, setQuantity] = useState(defaultValue);

  const contClasses = classNames({
    [classes.cont]: true,
    [classes['cont--sm']]: variant === 'small',
    [classes['cont--lg']]: variant === 'large',
  });

  const quantityClasses = classNames({
    [classes.quantity]: true,
    [classes['quantity--sm']]: variant === 'small',
    [classes['quantity--lg']]: variant === 'large',
  });

  const titleClasses = classNames({
    [classes['title--sm']]: variant === 'small',
    [classes['title--lg']]: variant === 'large',
  });

  const decreaseQuantity = () => {
    setQuantity((oldValue) => {
      const decrement = oldValue - 1;
      const newValue = decrement < min ? min : decrement;
      onChange?.(newValue);
      return newValue;
    });
  };

  const increaseQuantity = () => {
    setQuantity((oldValue) => {
      const increment = oldValue + 1;
      const newValue = increment > max ? max : increment;
      onChange?.(newValue);
      return newValue;
    });
  };

  const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.valueAsNumber);
    onChange?.(e.target.valueAsNumber);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (quantity < min) {
      setQuantity(min);
    } else if (quantity > max) {
      setQuantity(max);
      onBlur?.(e);
    }
  };

  return (
    <div ref={ref}>
      <Text variant="poppinsRegular" color="lightGray" className={titleClasses}>
        Quantity
      </Text>
      <div className={contClasses}>
        <button
          className={classes.pickerButton}
          onClick={decreaseQuantity}
          type="button"
        >
          &ndash;
        </button>
        <input
          className={quantityClasses}
          type="number"
          name="productQuantity"
          min={min}
          max={max}
          step={1}
          value={quantity}
          onBlur={handleBlur}
          onChange={changeQuantity}
        ></input>
        <button
          className={classes.pickerButton}
          onClick={increaseQuantity}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
});
