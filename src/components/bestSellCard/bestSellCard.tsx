import { Link } from 'react-router-dom';

import { Button } from '../button';
import { Text } from '../text';
import classes from './bestSellCard.module.scss';

interface CardProps {
  title: string;
  imgSrc: string;
  onClick?: () => void;
}

export function BestSellCard({ title, imgSrc, onClick }: CardProps) {
  return (
    <div className={classes.cont}>
      <Link to={'/catalog'} className={classes.link}>
        <div className={classes.imgCont}>
          <img className={classes.img} src={imgSrc} alt={title} />
          <Text
            variant="openSansSemiBold"
            color="white"
            className={classes.title}
          >
            {title}
          </Text>
        </div>
      </Link>
      <Button element="a" color="green" size="md" onClick={onClick}>
        Buy
      </Button>
    </div>
  );
}
