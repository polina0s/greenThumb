import { Link } from 'react-router-dom';

import { Button } from '../button';
import { Text } from '../text';
import classes from './catalogCard.module.scss';

interface CatalogCardProps {
  title: string;
  price: number;
  imgSrc: string;
  id: number;
}

export function CatalogCard({ title, price, imgSrc, id }: CatalogCardProps) {
  return (
    <div className={classes.cont}>
      <Link to={`/catalog/${id}`} className={classes.link}>
        <div className={classes.imgCont}>
          <img className={classes.img} src={imgSrc} alt={title} />
        </div>
        <div className={classes.info}>
          <Text variant="openSansBold" color="gray">
            {title}
          </Text>
          <Text variant="openSansRegularLG" color="gray">
            $ {price}
          </Text>
        </div>
      </Link>
      <Button size="sm" color="green">
        Buy
      </Button>
    </div>
  );
}
