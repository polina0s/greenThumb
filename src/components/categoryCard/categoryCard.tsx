import { Link } from 'react-router-dom';

import { Text } from '../text';
import classes from './categoryCard.module.scss';

interface CardProps {
  title: string;
  value: string;
  imgSrc: string;
}

export function CategoryCard({ title, value, imgSrc }: CardProps) {
  return (
    <Link to={`/catalog?category=${value}`} className={classes.link}>
      <div className={classes.cont}>
        <div className={classes.imgCont}>
          <img className={classes.img} src={imgSrc} alt={title} />
        </div>
        <Text variant="openSansBold" color="gray" className={classes.name}>
          {title}
        </Text>
      </div>
    </Link>
  );
}
