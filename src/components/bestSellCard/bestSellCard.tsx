import { Button } from '../../ui/button';
import { Text } from '../../ui/text';
import classes from './bestSellCard.module.scss';

interface CardProps {
  title: string;
  imgSrc: string;
}

export function BestSellCard({ title, imgSrc }: CardProps) {
  return (
    <div className={classes.cont}>
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
      <Button element="a" color="green" size="md">
        Buy
      </Button>
    </div>
  );
}
