import { forwardRef } from 'react';

import { Dropdown } from '../dropdown/dropdown';
import { RadioInput } from '../radioInput';
import classes from './dropdownFilter.module.scss';

const filters = [
  { value: 'bonsai', label: 'Bonsa' },
  { value: 'cacti', label: 'Cacti' },
  { value: 'creepers', label: 'Creepers' },
  { value: 'succulents', label: 'Succulents' },
  { value: 'seeds', label: 'Seeds' },
  { value: 'gifts', label: 'Gifts' },
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
                key={filter.value}
              />
            );
          })}
        </div>
      </Dropdown>
    );
  },
);
