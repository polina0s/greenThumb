import Select from 'react-dropdown-select';

import { Box, BoxProps } from '../../components/box';

const list = [
  {
    value: 1,
    label: 'Leanne Graham',
  },
  {
    value: 2,
    label: 'Ervin Howell',
  },
];

export function Dropdown({ title }: BoxProps) {
  return (
    <Box title={title}>
      {/* <Select values={list} options={list} /> */}
    </Box>
  );
}
