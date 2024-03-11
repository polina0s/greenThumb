import { Box } from '../../components/box';
import { Text } from '../text';
import classes from './dropdown.module.scss';

interface DropDownProps {
  title: string;
}

export function Dropdown({ title }: DropDownProps) {
  return (
    <Box>
      <Text variant="openSansRegularLG" color="gray" className={classes.title}>
        {title}
      </Text>
    </Box>
  );
}
