import { forwardRef } from 'react';

import { Box } from '../../components/box';
import { Text } from '../../components/text';
import classes from './rangeFilter.module.scss';

interface RangeFilterProps {
  title: string;
  min: number;
  max: number;
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
}

export const RangeFilter = forwardRef<HTMLInputElement, RangeFilterProps>(
  function RangeFilter({ max, min, onChange, text, title, name }, ref) {
    return (
      <Box>
        <Text
          variant="openSansRegularLG"
          color="gray"
          className={classes.title}
        >
          {title}
        </Text>
        <input
          type="range"
          id="range"
          min={min}
          max={max}
          step="10"
          className={classes.range}
          onChange={onChange}
          name={name}
          ref={ref}
        />
        <Text
          variant="openSansRegularSM"
          color="gray"
          className={classes.price}
        >
          {text}
        </Text>
      </Box>
    );
  },
);
