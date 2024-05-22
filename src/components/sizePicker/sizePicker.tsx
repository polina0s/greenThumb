import { forwardRef, useState } from 'react';
import * as React from 'react';

import { RadioInput } from '../radioInput';
import { Text } from '../text';
import classes from './sizePicker.module.scss';

interface SizePickerProps {
  defaultSize?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const options = [
  { value: 'S', disabled: false },
  { value: 'M', disabled: false },
  { value: 'L', disabled: false },
];

export const SizePicker = forwardRef<HTMLDivElement, SizePickerProps>(
  function SizePicker({ defaultSize = '', onChange }, ref) {
    const [checked, setChecked] = useState(defaultSize);

    const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.value);
      onChange?.(e);
    };

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
          {options.map(({ value, disabled }) => (
            <RadioInput
              key={value}
              variant="buttonOption"
              value={value}
              name="size"
              label={value}
              disabled={disabled}
              checked={checked === value}
              onChange={handleSizeChange}
            />
          ))}
        </div>
      </div>
    );
  },
);
