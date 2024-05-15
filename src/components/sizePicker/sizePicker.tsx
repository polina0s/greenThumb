import { forwardRef, useState } from 'react';

import { Text } from '../text';
import classes from './sizePicker.module.scss';

interface SizePickerProps {
  defaultValue: string;
}

export const SizePicker = forwardRef<HTMLDivElement, SizePickerProps>(
  function SizePicker({ defaultValue }, ref) {
    const [checked, setChecked] = useState(defaultValue);

    return (
      <div ref={ref}>
        <Text
          variant="poppinsRegular"
          color="lightGray"
          className={classes.title}
        >
          Size
        </Text>
        <div className={classes.optionsCont}>
          <label>
            <input
              type="radio"
              name="size"
              value="S"
              onChange={(e) => setChecked(e.target.value)}
              checked={checked === 'S'}
            />
            <div className={classes.optionBox}>
              <span className={classes.optionSize}>S</span>
            </div>
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="M"
              onChange={(e) => setChecked(e.target.value)}
              checked={checked === 'M'}
            />
            <div className={classes.optionBox}>
              <span className={classes.optionSize}>M</span>
            </div>
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="L"
              onChange={(e) => setChecked(e.target.value)}
              checked={checked === 'L'}
            />
            <div className={classes.optionBox}>
              <span className={classes.optionSize}>L</span>
            </div>
          </label>
        </div>
      </div>
    );
  },
);
