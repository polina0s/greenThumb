import { Text } from '../text';
import classes from './pageHeader.module.scss';

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className={classes.cont}>
      <Text variant="poppinsRegular" className={classes.title}>
        {title}
      </Text>
      <Text variant="poppinsRegular" className={classes.description}>
        {description}
      </Text>
    </div>
  );
}
