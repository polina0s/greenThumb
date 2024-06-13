import { forwardRef, useState } from 'react';

import { ButtonOption } from '../buttonOption';
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
  name?: string;
}

export const SizePicker = forwardRef<HTMLDivElement, SizePickerProps>(
  function SizePicker({ defaultSize = '', sizes, onChange, name }, ref) {
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
            <ButtonOption
              key={value}
              value={value}
              name={name}
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
