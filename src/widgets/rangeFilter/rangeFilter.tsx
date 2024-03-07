import { useState } from 'react';

import { Box } from '../../components/box';
import { Text } from '../../components/text';
import classes from './rangeFilter.module.scss';

interface RangeFilterProps {
  title: string;
  min: string;
  max: string;
}

export function RangeFilter({ title, min, max }: RangeFilterProps) {
  const [inputValue, setInputValue] = useState(min);

  return (
    <Box title={title}>
      <input
        type="range"
        id="range"
        min={min}
        max={max}
        step="1"
        onChange={(e) => setInputValue(e.target.value)}
        className={classes.range}
      />
      <Text variant="openSansRegularSM" color="gray" className={classes.price}>
        from {min}$ to ${inputValue}
      </Text>
    </Box>
  );
}
