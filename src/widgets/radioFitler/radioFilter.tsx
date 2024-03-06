import { Box } from '../../components/box';
import { RadioInput } from '../../components/radioInput';
import classes from './radioFilter.module.scss';

const filters = [
  { name: 'Planter', value: 'planter', id: '1' },
  { name: 'Flowers', value: 'flowers', id: '2' },
  { name: 'Care', value: 'care', id: '3' },
  { name: 'Heat pack', value: 'heatPack', id: '4' },
];

interface RadioFilterProps {
  title: string;
}

export function RadioFilter({ title }: RadioFilterProps) {
  return (
    <Box title={title}>
      <div className={classes.filters}>
        {filters.map((filter) => {
          return (
            <RadioInput
              className={classes.input}
              value={filter.value}
              name={filter.name}
              key={filter.id}
            />
          );
        })}
      </div>
    </Box>
  );
}
