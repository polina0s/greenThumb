import { Link } from 'react-router-dom';

import star from '../../assets/images/Star 1.png';
import { Button } from '../button';
import { Text } from '../text';
import classes from './saleCard.module.scss';

interface SaleCardProps {
  saleValue: number;
  title: string;
  newPrice: number;
  oldPrice: number;
  imgSrc: string;
  id: number;
}

export function SaleCard({
  saleValue,
  title,
  newPrice,
  oldPrice,
  imgSrc,
  id,
}: SaleCardProps) {
  return (
    <div className={classes.cont}>
      <Link to={`/catalog/${id}`} className={classes.link}>
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
      </Link>
      <Button size="sm" color="green">
        Buy
      </Button>
    </div>
  );
}
