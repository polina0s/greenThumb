import { forwardRef } from 'react';

import { Dropdown } from '../dropdown/dropdown';
import { RadioInput } from '../radioInput';
import classes from './dropdownFilter.module.scss';

const filters = [
  { value: 'bonsai', label: 'Bonsai', id: '1' },
  { value: 'cacti', label: 'Cacti', id: '2' },
  { value: 'creepers', label: 'Creepers', id: '3' },
  { value: 'succulents', label: 'Succulents', id: '4' },
  { value: 'seeds', label: 'Seeds', id: '5' },
  { value: 'gifts', label: 'Gifts', id: '6' },
];

interface DropdownFilterProps {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const DropdownFilter = forwardRef<HTMLDivElement, DropdownFilterProps>(
  function DropdownFilter({ onChange, name }, ref) {
    return (
      <Dropdown title="All Categories" defaultOpen={false}>
        <div className={classes.options} ref={ref}>
          {filters.map((filter) => {
            return (
              <RadioInput
                name={name}
                onChange={onChange}
                className={classes.input}
                value={filter.value}
                label={filter.label}
                key={filter.id}
              />
            );
          })}
        </div>
      </Dropdown>
    );
  },
);
