import { forwardRef } from 'react';

import { Box } from '../../components/box';
import { RadioInput } from '../../components/radioInput';
import { Text } from '../../components/text';
import classes from './radioFilter.module.scss';

const filters = [
  { label: 'Planter', value: 'planter' },
  { label: 'Flowers', value: 'flowers' },
  { label: 'Care', value: 'care' },
  { label: 'Heat pack', value: 'heatPack' },
];
interface FilterProps {
  name: string;
  title: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const RadioFilter = forwardRef<HTMLDivElement, FilterProps>(
  function RadioFilter({ title, onChange, name }, ref) {
    return (
      <Box>
        <Text
          variant="openSansRegularLG"
          color="gray"
          className={classes.title}
        >
          {title}
        </Text>
        <div className={classes.filters} ref={ref}>
          {filters.map((filter) => {
            return (
              <RadioInput
                name={name}
                className={classes.input}
                value={filter.value}
                label={filter.label}
                key={filter.value}
                onChange={onChange}
              />
            );
          })}
        </div>
      </Box>
    );
  },
);
