import { useState } from 'react';

import { Box } from '../../components/box';
import { Text } from '../text';
import classes from './dropdown.module.scss';

interface DropdownProps {
  title: string;
  defaultOpen: boolean;
  variant?: 'filter' | 'list';
}

export function Dropdown({
  title,
  defaultOpen,
  children,
  variant = 'filter',
}: React.PropsWithChildren<DropdownProps>) {
  const [open, setOpen] = useState(defaultOpen);

  if (variant === 'filter')
    return (
      <Box>
        <button className={classes.filterButton} onClick={() => setOpen(!open)}>
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

  return (
    <div className={classes.listCont}>
      <button className={classes.listButton} onClick={() => setOpen(!open)}>
        <Text
          variant="openSansRegularLG"
          color="gray"
          className={classes.listButtonSymbol}
        >
          &#8250;
        </Text>
        <Text
          variant="openSansRegularLG"
          color="gray"
          className={classes.listTitle}
        >
          {title}
        </Text>
      </button>
      {open ? children : null}
    </div>
  );
}
