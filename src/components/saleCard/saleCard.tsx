import star from '../../assets/images/Star 1.png';
import { Button } from '../../ui/button';
import { Text } from '../../ui/text';
import classes from './saleCard.module.scss';

interface SaleCardProps {
  saleValue: number;
  title: string;
  newPrice: number;
  oldPrice: number;
  imgSrc: string;
}

export function SaleCard({
  saleValue,
  title,
  newPrice,
  oldPrice,
  imgSrc,
}: SaleCardProps) {
  return (
    <div className={classes.cont}>
      <div className={classes.imgWrap}>
        <div className={classes.imgCont}>
          <img className={classes.img} src={imgSrc} alt={title} />
        </div>
        <div className={classes.saleLabelCont}>
          <div className={classes.saleStar}>
            <img src={star} alt="" />
          </div>
          <Text
            variant="openSansBold"
            color="white"
            className={classes.saleValue}
          >
            {saleValue}% off
          </Text>
        </div>
      </div>
      <div className={classes.info}>
        <Text variant="openSansBold" color="gray">
          {title}
        </Text>
        <div className={classes.price}>
          <Text variant="openSansRegularLG">$ {newPrice}</Text>
          <Text
            variant="openSansSemiBold"
            color="red"
            className={classes.oldPrice}
          >
            $ {oldPrice}
          </Text>
        </div>
      </div>
      <Button size="sm" color="green">
        Buy
      </Button>
    </div>
  );
}
