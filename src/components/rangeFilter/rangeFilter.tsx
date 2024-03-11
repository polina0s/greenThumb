import { Box } from '../../components/box';
import { Text } from '../../components/text';
import classes from './rangeFilter.module.scss';

interface RangeFilterProps {
  title: string;
  min: string;
  max: string;
  text: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function RangeFilter({
  title,
  min,
  max,
  text,
  onChange,
}: RangeFilterProps) {
  return (
    <Box>
      <Text variant="openSansRegularLG" color="gray" className={classes.title}>
        {title}
      </Text>
      <input
        type="range"
        id="range"
        min={min}
        max={max}
        step="1"
        className={classes.range}
        onChange={onChange}
      />
      <Text variant="openSansRegularSM" color="gray" className={classes.price}>
        {text}
      </Text>
    </Box>
  );
}
