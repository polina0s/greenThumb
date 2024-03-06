import { Box } from '../../components/box';
import { Text } from '../../components/text';
import classes from './rangeFilter.module.scss';

interface RangeFilterProps {
  title: string;
  min: number;
  max: number;
}

export function RangeFilter({ title, min, max }: RangeFilterProps) {
  return (
    <Box title={title}>
      <input
        type="range"
        id="range"
        min={min}
        max={max}
        step="1"
        className={classes.range}
      />
      <Text variant="openSansRegularSM" color="gray">
        from {min} to
      </Text>
    </Box>
  );
}
