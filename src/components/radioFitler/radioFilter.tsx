import { Box } from '../../components/box';
import { RadioInput } from '../../components/radioInput';
import { Text } from '../../components/text';
import classes from './radioFilter.module.scss';

const filters = [
  { name: 'Planter', value: 'planter', id: '1' },
  { name: 'Flowers', value: 'flowers', id: '2' },
  { name: 'Care', value: 'care', id: '3' },
  { name: 'Heat pack', value: 'heatPack', id: '4' },
];
interface FilterProps {
  title: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function RadioFilter({ title, onChange }: FilterProps) {
  return (
    <Box>
      <Text variant="openSansRegularLG" color="gray" className={classes.title}>
        {title}
      </Text>
      <div className={classes.filters}>
        {filters.map((filter) => {
          return (
            <RadioInput
              className={classes.input}
              value={filter.value}
              name={filter.name}
              key={filter.id}
              onChange={onChange}
            />
          );
        })}
      </div>
    </Box>
  );
}
