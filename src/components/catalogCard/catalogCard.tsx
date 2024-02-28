import { Button } from '../button';
import { Text } from '../text';
import classes from './catalogCard.module.scss';

interface CatalogCardProps {
  title: string;
  price: number;
  imgSrc: string;
}

export function CatalogCard({ title, price, imgSrc }: CatalogCardProps) {
  return (
    <div className={classes.cont}>
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
      <Button size="sm" color="green">
        Buy
      </Button>
    </div>
  );
}
