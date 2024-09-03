import { forwardRef } from 'react';

import { GetCategoriesResponseData } from '../../store/categories/types';
import { Dropdown } from '../dropdown/dropdown';
import { RadioInput } from '../radioInput';
import classes from './dropdownFilter.module.scss';

interface DropdownFilterProps {
  name: string;
  options: GetCategoriesResponseData[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const DropdownFilter = forwardRef<HTMLDivElement, DropdownFilterProps>(
  function DropdownFilter({ onChange, name, options }, ref) {
    return (
      <Dropdown title="All Categories" defaultOpen={false}>
        <div className={classes.options} ref={ref}>
          {options.map((option) => {
            return (
              <RadioInput
                name={name}
                onChange={onChange}
                className={classes.input}
                value={option.name}
                label={option.name}
                key={option.id}
              />
            );
          })}
        </div>
      </Dropdown>
    );
  },
);
