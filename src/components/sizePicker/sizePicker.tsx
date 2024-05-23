import { forwardRef, useState } from 'react';
import * as React from 'react';

import { RadioInput } from '../radioInput';
import { Text } from '../text';
import classes from './sizePicker.module.scss';

export type SizeOptions = {
  value: string;
  disabled: boolean;
};

interface SizePickerProps {
  defaultSize?: string;
  sizes: SizeOptions[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const SizePicker = forwardRef<HTMLDivElement, SizePickerProps>(
  function SizePicker({ defaultSize = '', sizes, onChange }, ref) {
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
          {sizes.map(({ value, disabled }) => (
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
