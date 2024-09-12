import { forwardRef } from 'react';

import { Text } from '../text';
import classes from './quantitySelector.module.scss';

interface QuantitySelectorProps {
  min: number;
  max: number;
  value: number;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (value: number) => void;
}

export const QuantitySelector = forwardRef<
  HTMLDivElement,
  QuantitySelectorProps
>(function QuantitySelector({ min, max, value, onChange, onBlur }, ref) {
  const decreaseQuantity = () => {
    const decrement = value - 1;
    const newValue = decrement < min ? min : decrement;
    onChange(newValue);
  };

  const increaseQuantity = () => {
    const increment = value + 1;
    const newValue = increment > max ? max : increment;
    onChange(newValue);
  };

  const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.valueAsNumber);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (value < min) {
      onChange(min);
    } else if (value > max) {
      onChange(max);
      onBlur?.(e);
    }
  };

  return (
    <div ref={ref}>
      <Text
        variant="poppinsRegular"
        color="lightGray"
        className={classes.title}
      >
        Quantity
      </Text>
      <div className={classes.cont}>
        <button
          className={classes.pickerButton}
          onClick={decreaseQuantity}
          type="button"
        >
          &ndash;
        </button>
        <input
          className={classes.quantity}
          type="number"
          name="productQuantity"
          min={min}
          max={max}
          step={1}
          value={value}
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
