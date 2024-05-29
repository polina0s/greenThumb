import { useState } from 'react';
import * as React from 'react';

import { Text } from '../text';
import classes from './quantitySelector.module.scss';

interface QuantitySelectorProps {
  min: number;
  max: number;
  defaultValue: number;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (value: number) => void;
}

export const QuantitySelector = React.forwardRef<
  HTMLDivElement,
  QuantitySelectorProps
>(function QuantitySelector({ min, max, defaultValue, onChange, onBlur }, ref) {
  const [quantity, setQuantity] = useState(defaultValue);

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
      <Text
        variant="poppinsRegular"
        color="lightGray"
        className={classes.title}
      >
        Quantity
      </Text>
      <div className={classes.pickerCont}>
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
