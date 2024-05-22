import { useState } from 'react';
import * as React from 'react';

import { Text } from '../text';
import classes from './quantitySelector.module.scss';

interface QuantitySelectorProps {
  min: number;
  max: number;
  defaultValue: number;
}

export const QuantitySelector = React.forwardRef<
  HTMLDivElement,
  QuantitySelectorProps
>(function QuantitySelector({ min, max, defaultValue }, ref) {
  const [quantity, setQuantity] = useState(defaultValue);

  const decreaseQuantity = () => {
    let newQnt = quantity - 1;
    if (newQnt < min) {
      newQnt = min;
    } else if (newQnt > max) newQnt = max;
    setQuantity(newQnt);
  };

  const increaseQuantity = () => {
    let newQnt = quantity + 1;
    if (newQnt > max) newQnt = max;
    setQuantity(newQnt);
  };

  const changeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.valueAsNumber);
  };

  const hanleBlur = () => {
    if (quantity < min) {
      setQuantity(min);
    } else if (quantity > max) {
      setQuantity(max);
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
        <button className={classes.pickerButton} onClick={decreaseQuantity}>
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
          onBlur={hanleBlur}
          onChange={changeQuantity}
        ></input>
        <button className={classes.pickerButton} onClick={increaseQuantity}>
          +
        </button>
      </div>
    </div>
  );
});
