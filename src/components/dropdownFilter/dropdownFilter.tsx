import { Dropdown } from '../dropdown/dropdown';
import { RadioInput } from '../radioInput';
import classes from './dropdownFilter.module.scss';

const filters = [
  { value: 'bonsai', name: 'Bonsai', id: '1' },
  { value: 'cacti', name: 'Cacti', id: '2' },
  { value: 'creepers', name: 'Creepers', id: '3' },
  { value: 'succulents', name: 'Succulents', id: '4' },
  { value: 'seeds', name: 'Seeds', id: '5' },
  { value: 'gifts', name: 'Gifts', id: '6' },
];

interface DropdownFilterProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function DropdownFilter({ onChange }: DropdownFilterProps) {
  return (
    <Dropdown title="All Categories" defaultOpen={false}>
      <div className={classes.options}>
        {filters.map((filter) => {
          return (
            <RadioInput
              onChange={onChange}
              className={classes.input}
              value={filter.value}
              name={filter.name}
              key={filter.id}
            />
          );
        })}
      </div>
    </Dropdown>
  );
}
