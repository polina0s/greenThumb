import { Text } from '../text';
import classes from './pageHeader.module.scss';

interface SectionBannerProps {
  title: string;
  description: string;
}

export function SectionBanner({ title, description }: SectionBannerProps) {
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
