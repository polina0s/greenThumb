import { useState } from 'react';

import { Text } from '../text';
import classes from './quanitySelector.module.scss';

interface QuanitySelectorProps {
  min: number;
  max: number;
  defaultValue: number;
}

export function QuanitySelector({
  min,
  max,
  defaultValue,
}: QuanitySelectorProps) {
  const [quanity, setQuanity] = useState(defaultValue);

  const decreaseQuanity = () => {
    if (quanity > min) setQuanity(quanity - 1);
  };

  const increaseQuanity = () => {
    if (quanity < max) setQuanity(quanity + 1);
  };

  return (
    <div>
      <Text
        variant="poppinsRegular"
        color="lightGray"
        className={classes.title}
      >
        Quanity
      </Text>
      <div className={classes.pickerCont}>
        <button className={classes.pickerButton} onClick={decreaseQuanity}>
          &ndash;
        </button>
        <input
          className={classes.quanity}
          type="number"
          name="productQuanity"
          min={min}
          max={max}
          value={quanity}
          onChange={(e) => setQuanity(+e.target.value)}
        ></input>
        <button className={classes.pickerButton} onClick={increaseQuanity}>
          +
        </button>
      </div>
    </div>
  );
}
