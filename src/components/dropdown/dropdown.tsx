import { useState } from 'react';

import { Box } from '../../components/box';
import { Text } from '../text';
import classes from './dropdown.module.scss';

interface DropdownProps {
  title: string;
  defaultOpen: boolean;
}

export function Dropdown({
  title,
  defaultOpen,
  children,
}: React.PropsWithChildren<DropdownProps>) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Box>
      <button className={classes.button} onClick={() => setOpen(!open)}>
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
      {open ? children : null}
    </Box>
  );
}
