import { Box, BoxProps } from '../../components/box';

export function Dropdown({ title }: BoxProps) {
  return (
    <Box title={title}>{/* <Select values={list} options={list} /> */}</Box>
  );
}
