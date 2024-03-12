import * as React from 'react';

import { Box } from '../../components/box';
import { RadioInput } from '../radioInput';
import { Text } from '../text';
import classes from './dropdown.module.scss';

interface DropDownProps {
  title: string;
  open?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const filters = [
  { value: 'bonsai', name: 'Bonsai', id: '1' },
  { value: 'cacti', name: 'Cacti', id: '2' },
  { value: 'creepers', name: 'Creepers', id: '3' },
  { value: 'succulents', name: 'Succulents', id: '4' },
  { value: 'seeds', name: 'Seeds', id: '5' },
  { value: 'gifts', name: 'Gifts', id: '6' },
];

export function Dropdown({
  title,
  onChange,
  onClick,
  open = false,
}: DropDownProps) {
  return (
    <Box>
      <button className={classes.button} onClick={onClick}>
        <Text
          variant="openSansRegularLG"
          color="gray"
          className={classes.title}
        >
          {title}
        </Text>
        <Text
          variant="openSansRegularLG"
          color="gray"
          className={classes.title}
        >
          &#8250;
        </Text>
      </button>
      {open ? (
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
      ) : null}
    </Box>
  );
}
