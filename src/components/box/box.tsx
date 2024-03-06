import { Text } from '../text';
import classes from './box.module.scss';

export interface BoxProps {
  title: string;
}

export function Box({ children, title }: React.PropsWithChildren<BoxProps>) {
  return (
    <div className={classes.cont}>
      <Text variant="openSansRegularLG" color="gray" className={classes.title}>
        {title}
      </Text>
      {children}
    </div>
  );
}
