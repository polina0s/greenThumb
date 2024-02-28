import { Text } from '../text';
import classes from './categoryCard.module.scss';

interface CardProps {
  title: string;
  imgSrc: string;
}

export function CategoryCard({ title, imgSrc }: CardProps) {
  return (
    <div className={classes.cont}>
      <div className={classes.imgCont}>
        <img className={classes.img} src={imgSrc} alt={title} />
      </div>
      <Text variant="openSansBold" color="gray" className={classes.name}>
        {title}
      </Text>
    </div>
  );
}
